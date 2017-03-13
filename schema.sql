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


DROP TABLE IF EXISTS addedmovies;

CREATE TABLE addedmovies (
  id integer NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 INSERT INTO movies (title, year, genre, rating, image)

  VALUES
    ('Pulp Fiction', 1994, 'Drama', 'R', 'https://tinyurl.com/hrvx7aj');
    ('The Dark Knight', 2008, 'Action', 'PG-13', 'https://tinyurl.com/zlg7z7o'),
    ('Wedding Crashers', 2005, 'Comedy', 'R', 'https://tinyurl.com/gnvx5s8'),
    ('Frankenstein', 1931, 'Classics', 'Unrated', 'https://tinyurl.com/hm2utgr'),
    ('Avatar', 2009, 'Action', 'PG-13', 'https://tinyurl.com/hzk2mjd'),
    ('Minority Report', 2002, 'Sci-Fi', 'PG-13', 'https://tinyurl.com/zznutts'),
    ('Being John Malkovich', 1999, 'Drama', 'R', 'https://tinyurl.com/j32xswr'),
    ('Kill Bill: Volume 1', 2003, 'Action', 'R', 'https://tinyurl.com/jpx53z9'),
    ('The Departed', 2006, 'Drama', 'R', 'https://tinyurl.com/jxovsds'),
    ('The Notebook', 2004, 'Drama', 'PG-13', 'https://tinyurl.com/gqd2xpt'),
    ('The Lord of the Rings: The Fellowship of the Ring', 2001, 'Fantasy', 'PG-13', 'https://tinyurl.com/jy5m4yr'),
    ('Superbad', 2007, 'Comedy', 'R', 'https://tinyurl.com/hb9nye4'),
    ('Mean Girls', 2004, 'Comedy', 'PG-13', 'https://tinyurl.com/zxso9xx'),
    ('Anchorman: The Legend Of Ron Burgundy', 2004, 'Comedy', 'PG-13', 'https://tinyurl.com/zgnl6z9'),
    ('Shaun of the Dead', 2004, 'Comedy', 'R', 'https://tinyurl.com/gnvx5s8'),
    ('Step Brothers', 2008, 'Comedy', 'R', 'https://tinyurl.com/grsfggp'),
    ('Gladiator', 2000, 'Action', 'R', 'https://tinyurl.com/gtuavfc'),
    ('Phantom of the Opera', 1925, 'Classics', 'Unrated', 'https://tinyurl.com/juzm63d'),
    ('The Invisible Man', 1933, 'Classics', 'Unrated', 'https://tinyurl.com/zpqymwj'),
    ('Casablanca', 1942, 'Classics', 'PG', 'https://tinyurl.com/zkf37uz'),
    ('Gone with the Wind', 1939, 'Classics', 'G', 'https://tinyurl.com/z3uwtjc'),
    ('The Wolf Man', 1941, 'Classics', 'Approved', 'https://tinyurl.com/hzhzg7z'),
    ('Gattaca', 1997, 'Sci-Fi', 'PG-13', 'https://tinyurl.com/heco5jk'),
    ('Inception', 2010, 'Sci-Fi', 'PG-13', 'https://tinyurl.com/zqmtf5s'),
    ('The Matrix', 1999, 'Sci-Fi', 'R', 'https://tinyurl.com/zgdmwes'),
    ('Interstellar', 2014, 'Sci-Fi', 'PG-13', 'https://tinyurl.com/j2ph7y8'),
    ('Hugo', 2011, 'Fantasy', 'PG', 'https://tinyurl.com/hzgzlwl'),
    ('Life of Pi', 2012, 'Fantasy', 'PG', 'https://tinyurl.com/hmnr7hu'),
    ('Pan\'s Labyrinth', 2006, 'Fantasy', 'R', 'https://tinyurl.com/jeleefe'),
    ('Avatar', 2009, 'Fantasy', 'PG-13', 'https://tinyurl.com/hzk2mjd'),
    ('The GodFather', 1972, 'Drama', 'R', 'https://tinyurl.com/joarjnl');





