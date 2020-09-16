const notesCtlr  = {};

notesCtlr.renderNoteForm = (req, res)=>{
    res.render('notes/new-note');
};

notesCtlr.createNewNote = (req, res)=>{
    console.table(req.body);
    res.send('new note');
};

notesCtlr.renderNotes = (req, res)=>{
    res.send('render notes');
};

notesCtlr.renderEditForm = (req, res)=>{
    res.send('Edit form');
};

notesCtlr.updateNote = (req, res)=>{
    res.send('Update note');
};

notesCtlr.deleteNote = (req, res)=>{
    res.send('Delete note');
};

module.exports = notesCtlr;