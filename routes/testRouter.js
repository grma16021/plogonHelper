var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
  console.log(fetch('https://v2.xivapi.com/api/sheet?version=7.4'))
  
});

module.exports = router;