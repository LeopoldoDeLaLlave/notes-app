const notesCtlr  = {};

const Note = require('../models/Note');

notesCtlr.renderNoteForm = (req, res)=>{
    res.render('notes/new-note');
};

notesCtlr.createNewNote = async (req, res)=>{
    const {title, description} = req.body;
    const newNote = new Note({title,description});
    await newNote.save();
    req.flash('success_msg', 'Note added succesfully');
    res.redirect('/notes');
};

notesCtlr.renderNotes = async(req, res)=>{
    const notes = await Note.find().lean();;
    res.render('notes/all-notes', {notes});
};

notesCtlr.renderEditForm = async(req, res)=>{
    const note  = await Note.findById(req.params.id).lean();
    console.log(note);
    res.render('notes/edit-note.hbs',{note});
};

notesCtlr.updateNote = async(req, res)=>{
    const{title,description}= req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Note updated succesfully');
    res.redirect('/notes');
};

notesCtlr.deleteNote = async(req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note deleted succesfully');
    res.redirect('/notes');
};

module.exports = notesCtlr;