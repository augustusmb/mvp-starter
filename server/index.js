var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var movies = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// *** I Added
app.use(bodyParser.json());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


// *** I Added
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'film'
// });

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/movies', function (req, res) {
  movies.selectAll(function(err, data) {
    if(err) {
      console.log('Error getting movies');
      res.sendStatus(500);
    } else {
      // res.writeHead(201, {
      // 'content-type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
      // });
      console.log('success got movies')
      res.json(data);
    }
  });
});

app.options('/movies', function(req, res) {
  res.writeHead(200, {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*'
  });
  res.end();
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

