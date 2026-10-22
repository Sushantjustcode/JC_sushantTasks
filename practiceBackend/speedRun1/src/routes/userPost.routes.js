const express = require('express');
const router = express.Router();

const { userPost, userUpdate, userDelete } = require('../controller/userPost.controller');

router.post('/', userPost);
router.put('/:id', userUpdate);
router.delete('/:id', userDelete);

module.exports = router;
