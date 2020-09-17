const notesCtlr  = {};

const Note = require('../models/Note');

notesCtlr.renderNoteForm = (req, res)=>{
    res.render('notes/new-note');
};

notesCtlr.createNewNote = async (req, res)=>{
    const {title, description} = req.body;
    const newNote = new Note({title,description});
    await newNote.save();
    res.redirect('/notes');
};

notesCtlr.renderNotes = async(req, res)=>{
    const notes = await Note.find().lean();;
    res.render('notes/all-notes', {notes});
};

notesCtlr.renderEditForm = (req, res)=>{
    res.send('Edit form');
};

notesCtlr.updateNote = (req, res)=>{
    res.send('Update note');
};

notesCtlr.deleteNote = async(req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
};

module.exports = notesCtlr;