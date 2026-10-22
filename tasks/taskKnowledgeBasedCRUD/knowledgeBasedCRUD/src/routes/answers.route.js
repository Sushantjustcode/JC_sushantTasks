const express = require('express');
const router = express.Router();
const { answer, deleteAnswer } = require('../controllers/answer.controller');
const validateUserRef = require('../middleware/validateUserRef.middleware');

router.post('/', validateUserRef, answer);
router.delete('/:id', deleteAnswer);

module.exports = router;
