const Java = require('../models/Java.model.js');

exports.create = (req, res) => {
    // Validate request

    console.log("req.body",req.body);
    if(!req.body.programName) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const java = new Java({
        programName: req.body.programName || "Untitled programName",
        programDetails: req.body.programDetails,
        programOutput: req.body.programOutput,
        noOfView: req.body.noOfView,
        noOfLikes: req.body.noOfLikes,
 
    });

    // Save Note in the database
    java.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the proh=gram."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Java.find()
    .then(notes => {
        var allJava = {"data":notes};
        res.send(allJava);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


exports.delete = (req, res) => {
    Java.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Java program not found with id " + req.params.noteId
            });
        }
        res.send({message: "Java program successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};


exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Java.findByIdAndUpdate(req.params.noteId, {
        programName: req.body.programName || "Untitled programName",
        programDetails: req.body.programDetails,
        programOutput: req.body.programOutput,
        noOfView: req.body.noOfView,
        noOfLikes: req.body.noOfLikes,
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};
