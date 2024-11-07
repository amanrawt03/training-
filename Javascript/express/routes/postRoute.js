const express = require('express')
const router = express.Router()
const {getPosts, createPost, updatePost,deletePost} = require('../controller/postController.js')

router.get('/read', getPosts)
router.post('/create', createPost)
router.put('/update/:id', updatePost)
router.delete('/deletePost/:id', deletePost)


module.exports = router