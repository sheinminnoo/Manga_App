const express = require("express");
const MangasController = require("../controllers/MangasController");
const { body } = require("express-validator");
const handleErrorMessage = require("../middlewares/handleErrorMessage");
const router = express.Router();

router.get('',MangasController.getMangas);
router.post('',[
    body('title').notEmpty(),
    body('author').notEmpty(),
    body('genre').notEmpty().isArray({min : 2}),
    body('description').notEmpty(),
    body('chapters').notEmpty(),
    body('rating').notEmpty(),
    body('status').notEmpty(),
    body('releaseDate').notEmpty(),
    body('imageUrl').notEmpty(),
    body('chapterList').notEmpty(),
    body('ongoingManga').notEmpty(),
    body("recommendedManga").notEmpty()

],handleErrorMessage,MangasController.postManga);
router.get('/:id',MangasController.getMangaByID);
router.patch('/:id',MangasController.patchManga);
router.delete('/:id',MangasController.deleteManga)

module.exports = router