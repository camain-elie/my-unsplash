const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.postImage);

router.get('/', controller.getImages);

router.delete('/', controller.deleteImage);

module.exports = router;