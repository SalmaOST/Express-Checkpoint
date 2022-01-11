const express = require("express");
let app = express()
const port = 8080
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public/css'));

//MIDDLEWARE FOR WORKING TIME
let date= new Date();
let jour=date.getDay();
let heure=date.getHours();
app.use((request , response, next)=>{
  if (jour >=1 && jour <= 5 && heure >=9 && heure < 17) {
   next()
  } else {
    response.render('serviceClose');
  }
});

//DEFINE ROUTES
app.get('/', function (req, res) {
    res.render('home');
  })
app.get('/contact', function (req, res) {
    res.render('contact');
  })
app.get('/service', function (req, res) {
    res.render('service');
  })



app.listen(port)