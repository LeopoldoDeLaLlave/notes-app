const { Router } = require('express');
const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/auth');

//Nueva nota
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', createNewNote);


//Obtener notas
router.get('/notes', isAuthenticated, renderNotes);


//Editar notas
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit-note/:id', isAuthenticated, updateNote);


//Eliminar nota

router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;