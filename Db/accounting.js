const Accounting = require('../Models/accounting-model');
const seedData = require('./accounting-seeds.json');


Accounting.deleteMany({})
  .then(() => {

    return Accounting.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });