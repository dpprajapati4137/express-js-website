var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/formprocess', function(req, res, next) {
  console.log("Yes I am form");
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
 console.log("A Value is " + a  +  "B Value is" +b);
 var msg = "Hi " + a;
 res.render('ans',{title:msg});
});

module.exports = router;
