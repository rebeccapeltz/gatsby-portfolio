import React from "react"
import logo from "../assets/logo.svg"
import photographer from "../assets/photographer.svg"
import shutter from '../assets/shutter.png'
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={shutter} alt="logo" height="40" width="40"/>
          <span className="logo-text">Portfolio</span>
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
