const signup = async (req, res) => {
  const { username, email, password, image } = req.body

  res.send('Sign Up')
}

const login = async (req, res) => {
  res.send('Login')
}

const logout = async (req, res) => {
  res.send('Logout')
}

const getMe = async (req, res) => {
  res.send('Get Me')
}

module.exports = {
  signup,
  login,
  logout,
  getMe,
}
