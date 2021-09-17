import React, { CSSProperties, FC } from 'react'
import Logo from '../assets/logo.png'

const logo: CSSProperties = {
  paddingLeft:'1rem'
}

const Header: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" style={logo}>
        <img alt='rick and morthy' src={Logo} width="110"/>
      </div>
    </nav> 
  )
}

export default Header
