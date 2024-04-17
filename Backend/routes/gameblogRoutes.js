const express = require('express');
const GameBlogController = require('../controllers/GameBlogController');
const handleErrorMessage = require('../middlewares/handleErrorMessage');
const { body } = require('express-validator');
const router = express.Router();

router.get('',GameBlogController.getGameBlogs)
router.get('/:id',GameBlogController.getGameBlog)
router.post('',
[
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('content').notEmpty(),
    body('company').notEmpty(),
    body('tags').notEmpty().isArray({min : 2}),
],handleErrorMessage,GameBlogController.postGameBlog)
router.delete('/:id',GameBlogController.deleteGameBlog)
router.patch('/:id',GameBlogController.updateGameBlog)
module.exports = router