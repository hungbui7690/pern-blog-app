import { Link } from 'react-router-dom'
import Logo from '/favicon.png'

const Navbar = () => {
  const currentUser = null
  const logout = true

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=developers'>
            <h6>Developers</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>Design</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='link' to='/login'>
              Login
            </Link>
          )}
          <span className='create'>
            <Link className='link' to='/create'>
              Create
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
