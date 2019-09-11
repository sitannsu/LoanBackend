const mongoose = require('mongoose');

const FactDetailsSchema = mongoose.Schema({
    factName: String,
    factImage: String,
    factType: String,
    factTypeId: String,

 
 
 
}, {
    timestamps: true
});

module.exports = mongoose.model('FactDetails', FactDetailsSchema);