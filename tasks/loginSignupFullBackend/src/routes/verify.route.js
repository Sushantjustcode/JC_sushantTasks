const express = require('express');
const router = express.Router();
const { verifyOtp } = require('../controllers/verify.controller');

router.post('/', verifyOtp);

module.exports = router;
