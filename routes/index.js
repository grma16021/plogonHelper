var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  await fetchFromApi()
  
  res.render('index', { title: 'Express', row:rowMaybe });
  
});


async function fetchFromApi(){
  const response = await fetch('https://v2.xivapi.com/api/search?sheets=Action&query=Name="Stardiver"');
  //fetch('https://v2.xivapi.com/api/search?version=7.4&query=&sheets=Action')
  if (!response.ok){
    console.log("Something went wrong")
  }

  data = await response.json();
  rowMaybe = data.results[0]
  rowMaybe2 = data.results[1]

 Object.entries(rowMaybe).forEach(([key, value]) => {
  console.log(key , value);
 });

  //console.log(rowMaybe)

}

module.exports = router;

