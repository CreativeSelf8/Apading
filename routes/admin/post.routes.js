const express = require("express");

const router = express.Router();

const postController = require('../../controllers/admin/post.controller');

router.get('/', postController.getList);

router.get('/add', postController.getFormAdd)
router.post('/add', postController.addPost);

router.delete('/delete/:id', postController.deletePost);

router.get('/update/:id', postController.getFormUpdate)
router.put('/update/:id', postController.updatePost);
module.exports = router;