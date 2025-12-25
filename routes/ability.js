var express = require('express');
var router = express.Router();
var query = null


router.get('/', async (req,res) => {
    query = req.query.q;
    await fetchFromApi()
    res.render('index', { title: 'Express', row:rowMaybe });
});

async function fetchFromApi(){
    console.log("user query:" + query)
    //SEARCH is Case Sensitive

  const response = await fetch(`https://v2.xivapi.com/api/search?sheets=Action&query=Name~"${query}"`);
  console.log("running query: " +`https://v2.xivapi.com/api/search?sheets=Action&query=Name=~"${query}"`)
  //fetch('https://v2.xivapi.com/api/search?version=7.4&query=&sheets=Action')
  if (!response.ok){
    console.log("Something went wrong")
  }

  data = await response.json();
  try{
    rowMaybe = data.results[0]
    rowMaybe2 = data.results[1]
    console.log(rowMaybe)
    if(rowMaybe == undefined){
        rowMaybe = "error"
    }
  } catch(error){
    console.log(error)
  }
    
  

 /*Object.entries(rowMaybe).forEach(([key, value]) => {
  console.log(key , value);
 });*/

  //console.log(rowMaybe)

}

module.exports = router;