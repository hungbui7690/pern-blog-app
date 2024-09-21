import { useState } from 'react'
import { tempPosts } from '../utils/dummy'

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState(tempPosts)

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <img src={post?.img} alt='' />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
