var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'film'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM movies', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var insertMovie = function(data, callback) {
  connection.query('INSERT INTO addedmovies (title) VALUES (?, ?, ?, ?, ?)', [data.title], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertMovie = insertMovie;
