require('dotenv').config();
const mongoose = require('mongoose');


const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DEV_DB_URL
    : 'mongodb://localhost/sneaker';
    // :process.env.DEV_DB_URL

mongoose.connect(mongoURI, {
  })

  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;