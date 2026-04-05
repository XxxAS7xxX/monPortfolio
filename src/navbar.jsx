import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./styles/navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" id="navbar">
      <div className="navLogo">
        <h1><Link to="/" className="btnAccueil">Portfolio</Link></h1>
      </div>
      <ul className="navLink">
        <li className="navLink-item"><Link to="/projets" className="btnAccueil">projets</Link></li>

        <li className="navLink-item" style={{ position: "relative" }}>
          <span
            className="navLink-item"
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer" }}
          >
            <a className="btnAccueil" onClick={e => e.preventDefault()}>stages</a>
          </span>

          {open && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: "0",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "0.5rem",
              zIndex: 100,
              backgroundColor: "#000",
              padding: "0.5rem",
              borderRadius: "0.5em",
              border: "1px solid rgba(255,255,0,0.2)",
              minWidth: "180px"
            }}>
              <Link to="/stages" className="btnAccueil" onClick={() => setOpen(false)}>
                Stage 1ère année
              </Link>
              <Link to="/stages2" className="btnAccueil" onClick={() => setOpen(false)}>
                Stage 2ème année
              </Link>
            </div>
          )}
        </li>

        <li className="navLink-item"><Link to="/competences" className="btnAccueil">compétences</Link></li>
        <li className="navLink-item"><Link to="/certification" className="btnAccueil">certifications</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar