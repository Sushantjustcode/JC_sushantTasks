const express = require('express');
const router = express.Router();

const userGet = require('./userGet.routes');
const userPost = require('./userPost.routes');

router.use('/userGet', userGet);
router.use('/userPost', userPost);

module.exports = router;
