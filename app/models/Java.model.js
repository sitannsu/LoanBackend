const mongoose = require('mongoose');

const JavaSchema = mongoose.Schema({
    programName: String,
    programDetails: String,
    programOutput: String,
    noOfView: String,
    noOfLikes: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Java', JavaSchema);