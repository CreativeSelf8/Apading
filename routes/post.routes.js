const express = require("express");

const router = express.Router();

const postController = require('../controllers/post.controller');

router.get('/', postController.getList);

module.exports = router;