const mysql = require('mysql');
const express = require('express');
const { getNote, getNoteById, deleteNote, addNote, updateNote } = require('../controllers/notecontroller.js')
const pool = require('../db/connetpool.js')

const router = express.Router();

// Get all Note
router.get('', getNote);

// Get an Note
router.get('/note/:id', getNoteById);

// Delete a Note
router.post('/delete/:id', deleteNote);

// Add Note
router.post('/', addNote);

// Update Note
router.post('/update/:id', updateNote);

module.exports = router;