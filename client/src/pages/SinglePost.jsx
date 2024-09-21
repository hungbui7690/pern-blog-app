import { useState } from 'react'
import Edit from '/edit.png'
import Delete from '/delete.png'
import { Link } from 'react-router-dom'
import { Menu } from '../components'
import moment from 'moment'
import DOMPurify from 'dompurify'
import { tempPosts } from '../utils/dummy'

const SinglePost = () => {
  const [post, setPost] = useState(tempPosts[0])
  const currentUser = null

  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.img} alt='' />
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt='' />}
          <div className='info'>
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt='' />
              </Link>
              <img src={Delete} alt='' />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>{' '}
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}

export default SinglePost
