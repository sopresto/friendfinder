var express = require('express')
var methodOverride = require('method-override')
var mysql = require('mysql')
var app = express()
var path = require("path");

//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(process.cwd() + "/public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "honey123",
    database: "friendfinder_db"
  });

  app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, function(){
	console.log('listening on 3000');
});


app.post('/submit', function(req, res){
	// res.json(req.body);
    
	connection.query(
		"INSERT INTO users (name, image) VALUES (?,?)",
        [req.body.user, req.body.photo],
    
        function(err, response) {
            connection.query(
                "INSERT INTO ratings (name, image) VALUES (?,?)",  
            )
            res.redirect("/");
          }
	  );
  });

 
