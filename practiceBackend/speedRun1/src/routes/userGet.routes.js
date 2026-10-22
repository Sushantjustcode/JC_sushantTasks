const express = require('express');
const router = express.Router();
const {userGet} = require('../controller/userGet.controller');

router.get("/",userGet);


module.exports = router;
