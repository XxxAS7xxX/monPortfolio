import React from "react"
import "./styles/navbar.css"

const Navbar = () => (
  <nav className="navbar">
    <div className="navLogo">
      <h1><a href="/">Portfolio</a></h1>
    </div>
    <ul className="navLink">
      <li className="navLink-item"><a href="/projets">projets</a></li>
      <li className="navLink-item"><a href="/stages">stages</a></li>
      <li className="navLink-item"><a href="/competences">compétences</a></li>
    </ul>
  </nav>
)
export default Navbar