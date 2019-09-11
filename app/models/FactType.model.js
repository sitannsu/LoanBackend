const mongoose = require('mongoose');

const FactTypeSchema = mongoose.Schema({
    factName: String,
    factImage: String,
 
 
 
}, {
    timestamps: true
});

module.exports = mongoose.model('FactType', FactTypeSchema);