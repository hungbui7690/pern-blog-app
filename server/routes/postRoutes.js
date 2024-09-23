const express = require('express')
const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
} = require('../controller/postController.js')
const authenticateUser = require('../middleware/authMiddleware.js')

const router = express.Router()

router.post('/', authenticateUser, createPost)
router.get('/', getAllPosts)
router.get('/:id', getPost)
router.delete('/:id', authenticateUser, deletePost)
router.patch('/:id', authenticateUser, updatePost)

module.exports = router
