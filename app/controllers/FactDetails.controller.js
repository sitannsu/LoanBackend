const FactDetails = require('../models/FactDetails.model.js');





exports.create = (req, res) => {
    // Validate request
    if(!req.body.factType) {
        return res.status(400).send({
            message: "Fact content can not be empty"
        });
    }

    // Create a Note
    const FactDetails = new FactDetails({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    FactDetails.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


exports.findAll = (req, res) => {
    FactDetails.find()
    .then(FactDetails => {
        var data = {"data":FactDetails}
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};