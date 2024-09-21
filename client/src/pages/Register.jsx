import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' />
        <input required type='email' placeholder='email' name='email' />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          autoComplete='true'
        />
        <button>Register</button>
        <p>Error Here</p>
        <span>
          Do you have an account?{' '}
          <Link to='/login' className='link'>
            Login
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Register
