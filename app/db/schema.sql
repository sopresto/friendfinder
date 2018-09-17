CREATE DATABASE friendfinder_db;
USE friendfinder_db;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    image TEXT,
    PRIMARY KEY (id)    
);

CREATE TABLE ratings(
    id INT NOT NULL AUTO_INCREMENT,
    rating INT NOT NULL,
    rating_id INT NOT NULL,
    FOREIGN KEY (rating_id) REFERENCES users(id),
    PRIMARY KEY (id)
);