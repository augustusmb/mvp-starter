DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  genre varchar(20) NOT NULL,
  year integer NOT NULL,
  rating varchar(10) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
