import React from "react"
import { Link } from "react-router-dom"
import "./styles/navbar.css"

const Navbar = () => (
  <nav className="navbar" id="navbar">
    <div className="navLogo">
      <h1><Link to="/" className="btnAccueil">Portfolio</Link></h1>
    </div>
    <ul className="navLink">
      <li className="navLink-item"><Link to="/projets" className="btnAccueil">projets</Link></li>
      <li className="navLink-item"><Link to="/stages" className="btnAccueil">stages</Link></li>
      <li className="navLink-item"><Link to="/competences" className="btnAccueil">compétences</Link></li>
    </ul>
  </nav>
)

export default Navbar