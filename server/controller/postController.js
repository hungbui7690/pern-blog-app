const { StatusCodes } = require('http-status-codes')
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require('../errors')
const Posts = require('../models/post')

const createPost = async (req, res) => {
  const { title, desc, body, image, category } = req.body

  if (!title || !desc || !body || !category)
    throw new BadRequestError('All fields are required')

  // if (title.length < 10)
  //   throw new BadRequestError('Title must be at least 10 chars')
  // if (body.length < 50)
  //   throw new BadRequestError('Body must be at least 50 chars')

  const post = await Posts.create({
    title,
    desc,
    body,
    image: image || '/default-image.png',
    userId: req.user.id,
  })

  res.status(StatusCodes.CREATED).json({ post })
}

const getAllPosts = async (req, res) => {
  const { category } = req.query
  console.log(category)
  let posts

  if (!category) {
    posts = await Posts.findAll({})
  } else
    posts = await Posts.findAll({
      where: {
        category: category,
      },
    })

  res.status(StatusCodes.OK).json({ posts })
}

const getPost = async (req, res) => {
  const { id: postId } = req.params

  const post = await Posts.findOne({
    where: {
      id: postId,
    },
  })

  res.status(StatusCodes.OK).json({ post })
}

const deletePost = async (req, res) => {
  const { id: postId } = req.params

  const Post = await Posts.findOne({
    where: {
      id: postId,
    },
  })

  if (!Post) throw new NotFoundError('Post not found')

  if (Post.userId !== req.user.id)
    throw new UnauthenticatedError('You are not authorized to delete this post')

  await Posts.destroy({
    where: {
      userId: req.user.id,
      id: postId,
    },
  })

  res.status(StatusCodes.OK).json({ msg: 'Post deleted successfully' })
}

const updatePost = async (req, res) => {
  const { id: postId } = req.params
  const { title, desc, body, image, category } = req.body

  const post = await Posts.findOne({
    where: {
      id: postId,
    },
  })

  if (!post) throw new NotFoundError('Post not found')

  if (post.userId !== req.user.id)
    throw new UnauthenticatedError('You are not authorized to update this post')

  post.title = title
  post.desc = desc
  post.body = body
  post.image = image
  post.category = category
  post.save()

  res.status(StatusCodes.OK).json({ post })
}

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
}
