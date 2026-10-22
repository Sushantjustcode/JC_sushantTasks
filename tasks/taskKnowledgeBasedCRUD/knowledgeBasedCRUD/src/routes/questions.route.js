const express = require('express');
const router = express.Router();
const {
    createRandomQuestion,
    getRandomQuestion,
    updateRandomQuestion,
    deleteRandomQuestion,
} = require('../controllers/randomQuestion.controller');
const validateUserRef = require('../middleware/validateUserRef.middleware');

router.post('/', validateUserRef, createRandomQuestion);
router.get('/', getRandomQuestion);
router.put('/:id', updateRandomQuestion);
router.delete('/:id', deleteRandomQuestion);

module.exports = router;
