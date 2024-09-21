import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tempPosts } from '../utils/dummy'

const Home = () => {
  const [posts, setPosts] = useState(tempPosts)

  const handleDelete = (id) => {}

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
