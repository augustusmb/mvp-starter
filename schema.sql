DROP DATABASE IF EXISTS film;

CREATE DATABASE film;

USE film;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id integer NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  year integer NOT NULL,
  genre varchar(20) NOT NULL,
  rating varchar(10) NOT NULL,
  image varchar(200) NOT NULL,
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 INSERT INTO movies (title, year, genre, rating, image)

  VALUES
    ('The Dark Knight', 2008, 'Action', 'PG-13', 'https://tinyurl.com/zlg7z7o'),
    ('Avatar', 2009, 'Action', 'PG-13', 'https://tinyurl.com/hzk2mjd'),
    ('Minority Report', 2002, 'Action', 'PG-13', 'https://tinyurl.com/zznutts'),
    ('Kill Bill: Volume 1', 2003, 'Action', 'R', 'https://tinyurl.com/jpx53z9'),
    ('The Departed', 2006, 'Drama', 'R', 'https://tinyurl.com/jxovsds'),
    ('The Notebook', 2004, 'Drama', 'PG-13', 'https://tinyurl.com/gqd2xpt'),
    ('The Lord of the Rings: The Fellowship of the Ring', 2001, 'Fantasy', 'PG-13', 'https://tinyurl.com/jy5m4yr'),
    ('Superbad', 2007, 'Comedy', 'R', 'https://tinyurl.com/hb9nye4'),
    ('Mean Girls', 2004, 'Comedy', 'PG-13', 'https://tinyurl.com/zxso9xx'),
    ('Anchorman: The Legend Of Ron Burgundy', 2004, 'Comedy', 'PG-13', 'https://tinyurl.com/zgnl6z9'),
    ('Shaun of the Dead', 2004, 'Comedy', 'R', 'https://tinyurl.com/gnvx5s8'),
    ('Step Brothers', 2008, 'Comedy', 'R', 'https://tinyurl.com/grsfggp'),
    ('Wedding Crashers', 2005, 'Comedy', 'R', 'https://tinyurl.com/gnvx5s8'),
    ('Gladiator', 2000, 'Action', 'R', 'https://tinyurl.com/gtuavfc');

