const express = require('express');
const router = express.Router();
const {
    createUser,
    listUsers,
    getUser,
    updateUser,
    deleteUser,
    getUserQuestions,
    getUserAnswers,
} = require('../controllers/user.controller');

router.post('/', createUser);
router.get('/', listUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id/questions', getUserQuestions);
router.get('/:id/answers', getUserAnswers);

module.exports = router;
