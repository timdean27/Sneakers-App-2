const express = require('express');
const Sneaker = require('../models/sneaker-model');
const Accounting = require('../models/accounting-model');

let search = {}
let sortTech = {}
//search.name = "charmeleon"
//search.name = RegExp("C", 'i')
//search.size = 7
sortTech = {retailPrice: 1}
console.log(search)


// Sneaker.find(search, function(err, stuff){
//     console.log(stuff);
//     console.log(stuff.length);
//     //mongoose.close();
//   });

  // Sneaker.find(search).sort({size: -1}).exec(function(err, stuff){
  //   console.log(stuff);
  //   console.log(stuff.length);
    
  // });

  // Sneaker.find(search).sort({retailPrice: 1}).then(function(err, stuff)
  // {
  //   console.log(stuff);
  //   console.log(stuff.length);
  // }
  // )
  // .catch(err => console.log(err))

  let totalSneakers
// Sneaker.find({},function(err, stuff)
//   {
//     totalSneakers = stuff.length
//   })
//   console.log(totalSneakers);

// function searchByUnigueID(search,totalSneakers ){



// searchByUnigueID()
// Accounting.findOneAndUpdate({uniqueID: `000000${i}`,
//                             name:sneakerName,
//                             retailPrice:sneakerRetailPrice ,
//                             releaseDate:sneakerReleaseDate ,}
//                             ,(err, stuff) =>{
//   console.log(stuff);
//   console.log(stuff.length);
// });




// search = {uniqueID: `000000${i}`}
// function searchByUnigueID(){
// Sneaker.find({},{ uniqueID: 1,
//                       name:1,
//                       retailPrice:1,
//                       releaseDate:1,
//                       _id: 0 },(err, sneakers) =>{
// sneakers.forEach(sneaker=>{
//           Accounting.findOneAndUpdate({uniqueID: sneaker.uniqueID},
//           {
//           name:sneaker.name,
//           retailPrice:sneaker.retailPrice,
//           releaseDate:sneaker.releaseDate},
//           {new:true}
//           ,(err, stuff) =>{
//       console.log(stuff);
//         });
//       })

//   })
// }


// Accounting.find({}).sort({profit: -1}).exec(function(err, stuff){
//     console.log(stuff);
//     console.log(stuff.length);
//     //mongoose.close();
//   });

let uniqueID
function uniqueIDGenerator(){

  Accounting.find({},function(err, stuff){
    let uniqueID 
    let currentIvalue = stuff.length
    console.log(currentIvalue);

    for(let i = currentIvalue+1; i <= currentIvalue+1; i++){
      if(i<10){
      uniqueID = `0000000${i}`;
      console.log(uniqueID)
      }
      else if (i>=10 && i < 100){
      uniqueID = `000000${i}`;
      console.log(uniqueID)
      }
      else if (i>=100 && i < 1000){
        uniqueID = `00000${i}`
     }
      else if (i>=1000 && i < 10000){
        uniqueID = `0000${i}`
      }
    }
  });
      return uniqueID
} 
uniqueIDGenerator()


