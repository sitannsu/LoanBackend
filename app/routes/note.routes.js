module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    const java = require('../controllers/Java.controller.js');

    const factDetails = require('../controllers/FactDetails.controller.js');

    const factType = require('../controllers/FactType.controller.js');
   

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve test
    app.get('/notesTest', notes.testNode);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);


        // Create a new Note
    app.post('/java', java.create);

    // Retrieve all Notes
    app.get('/java', java.findAll);
    app.delete('/java/:noteId', java.delete);
    app.put('/java/:noteId', java.update);

    app.post('/factType', factType.create);
    app.get('/factType', factType.findAll);
 

  

}
