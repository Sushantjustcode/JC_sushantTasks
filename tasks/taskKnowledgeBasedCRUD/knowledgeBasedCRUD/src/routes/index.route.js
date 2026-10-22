const express = require('express');
const router = express.Router();


const usersRouter = require('./users.route');
const categoriesRouter = require('./categories.route');
const questionsRouter = require('./questions.route');
const answersRouter = require('./answers.route');
const analyticsRouter = require('./analytics.route');

router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
router.use('/questions', questionsRouter);
router.use('/answers', answersRouter);
router.use('/analytics', analyticsRouter);

module.exports = router;
