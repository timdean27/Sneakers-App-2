const Sneaker = require('../Models/sneaker-model.js');
const seedData = require('./sneaker-seeds.json');


Sneaker.deleteMany({})
  .then(() => {

    return Sneaker.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
