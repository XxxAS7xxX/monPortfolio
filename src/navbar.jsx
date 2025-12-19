import React from "react"
import "./navbar.css"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <h1>Portfolio</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">projets</li>
      <li className="navbar--link-item">stages</li>
      <li className="navbar--link-item">compétences</li>
    </ul>
  </nav>
)
export default Navbar