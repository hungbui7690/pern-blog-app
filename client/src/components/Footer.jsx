import Logo from '/favicon.png'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <img src={Logo} alt='' />
        <span>
          Made with 💜 <strong>#2024</strong>
        </span>
      </div>
    </footer>
  )
}

export default Footer
