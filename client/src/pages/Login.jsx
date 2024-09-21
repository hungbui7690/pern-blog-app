import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          autoComplete='true'
        />
        <button>Login</button>
        <p> Error Here</p>
        <span>
          {"Don't"} you have an account?{' '}
          <Link to='/register' className='link'>
            Register
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
