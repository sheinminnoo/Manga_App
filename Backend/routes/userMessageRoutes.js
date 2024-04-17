const express = require('express');
const UserMessageController = require('../controllers/UserMessageController');
const router = express.Router();

router.post('/message',UserMessageController.postMessage)

module.exports = router