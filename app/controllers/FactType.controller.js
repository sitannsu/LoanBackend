const FactType = require('../models/FactType.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.factName) {
        return res.status(400).send({
            message: "Fact content can not be empty"
        });
    }

    // Create a Note
    const factType = new FactType({
        factName: req.body.factName || "Untitled Note",
        factImage: req.body.factImage
    });

    // Save Note in the database
    factType.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


exports.findAll = (req, res) => {
    FactType.find()
    .then(FactType => {
        var data = {"data":FactType}
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};