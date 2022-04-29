const mongoose = require('../Db/connection');

const AccountingSchema = new mongoose.Schema(
    {
        uniqueID:{type: String,required: true},
        name: {type: String},
        releaseDate: {type: Date},
        soldDate:{type: Date},
        retailPrice: {type: Number},
        soldPrice: {type: Number},
        marketPrice:{type: Number},
        profit:{type: Number},
        status: {type: String},
       
        
    },
    
  );
  
  const Accounting = mongoose.model('accounting', AccountingSchema);
  
  module.exports = Accounting;