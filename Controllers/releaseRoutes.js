const express = require('express');
const Sneaker = require('../Models/sneaker-model');
const Accounting = require('../Models/accounting-model');
const routerRelease = express.Router();
let oneback

routerRelease.get('/', (req, res) => {

        res.render('sneakers/releases/main')
  
  });

  routerRelease.get('/:brand', (req, res) => {
    /////make first letter of cap
    let brand = capFirstLetter(req.params.brand)
    //console.log("brand",brand)

    ///sortfunction
    let mainFilter = req.query.dropDown
    let splitFilterMain
    if (mainFilter != null){
      splitFilterMain= mainFilter
    }
    else {splitFilterMain = "up-releaseDate"}
    let sortReturn = sortFunc(splitFilterMain)
  
    ///search function
  
    let typedname = req.query.name
    let typedsize = req.query.size
  
    let searchReturn = searchFunc(typedname,typedsize)
    //console.log("searchReturn inside get brand (releaseRoutes)",searchReturn)
  
    Sneaker.find(searchReturn).sort(sortReturn)
      .then((sneaker) => res.render('sneakers/releases/brand',
      {
          sneakers:sneaker,
          search: req.query,
          brand:brand
      }
      ))
      .catch(err => res.send(err))
});

  module.exports = routerRelease

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions and Logic 

///search function
function searchFunc(typedname,typedsize){ 
    let search = {}
    if(typedname != null && typedname !== '')
    {
      search.name = new RegExp(typedname, 'i')
      //console.log("searchFunc in releaseRoutes search.name2",search.name)
    }
    if(typedsize != null && typedname == '' && typedsize != '')
    {
      search.size = typedsize
      //console.log("search.size",search.size)
    }
    if(typedname != null && typedname !== '' && typedsize != '' && typedsize != null)
    {
      search.name = new RegExp(typedname, 'i')
      search.size = typedsize
      //console.log("search.name2",search.name)
    }
    return search
    }
    
///sortfunction
function sortFunc(splitFilterMain){
  let sortBy ={}
  //console.log("Printing from sortFunc in releaseRoutes",splitFilterMain)
  splitFilterMain = splitFilterMain.split("-")
  //console.log("split",splitFilterMain[1])
  if(splitFilterMain[0] == "up"){
      sortBY = {[splitFilterMain[1]]: -1}
    }
  else if (splitFilterMain[0]== "down"){
        sortBY = {[splitFilterMain[1]]: 1}
    }
  //console.log("Printing from end of sortFunc sortBY in releaseRoutes ",sortBY)
 return sortBY
}

    /////make first letter of cap
function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
