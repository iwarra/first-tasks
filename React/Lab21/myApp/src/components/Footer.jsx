const Footer = () => {
  let date = new Date()

  return (
    <footer>
      <span>
        Copyright &copy; {date.getFullYear()}
      </span>
    </footer>
  )
}

export default Footer