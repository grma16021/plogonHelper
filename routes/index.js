var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const response = fetch('https://v2.xivapi.com/api/sheet?version=7.4');

  if (!response.ok){
    console.log("something went wrong");
  }

  if (response.ok){
    console.log(response);
  }
  res.render('index', { title: 'Express' });
  
  

});


module.exports = router;
