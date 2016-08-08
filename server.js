//include dependencies

var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

//create Posts table
var Posts = require('./models')['Posts'];
Posts.sync();

//set app as express
var app = express();

//current directory plus public folder.  everything in public folder accessible to interet
app.use(express.static(__dirname +'/public'));

//middleware 
app.use(bodyParser.urlencoded({
  extended:false
}));


//set view engine to handlebars
app.engine('handlebars', handlebars({
  //skeleton for every webpage
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//routes
//home page
app.get('/', function(req, res){
  res.render('index');
});

//form page
app.get('/new-post', function(req, res){
  res.render('new');
});

//actual post
app.get('/posts/:id', function(req, res){
  res.render('post');
});





//set port to use Heroku port or local host 3000
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('connected to', port);
});

