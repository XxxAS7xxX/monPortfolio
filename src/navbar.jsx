import React from "react"
import "./styles/navbar.css"



const Navbar = () => (

  <nav className="navbar">
    <div className="navLogo">
      <h1><a href="/" className="btnAccueil">Portfolio</a></h1>
    </div>
    <ul className="navLink">
      <li className="navLink-item"><a href="/projets" className="btnAccueil">projets</a></li>
      <li className="navLink-item"><a href="/stages" className="btnAccueil">stages</a></li>
      <li className="navLink-item"><a href="/competences" className="btnAccueil">compétences</a></li>
    </ul>
  </nav>
)
export default Navbar