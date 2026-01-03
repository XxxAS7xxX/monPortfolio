import './navbar.jsx'
import './styles/App.css'
import Navbar from './navbar.jsx'
import Accueil from './accueil.jsx'
import Projets from './projets.jsx'
import Stages from './stages.jsx'
import Profil from './profil.jsx'
// import Veille from './veille.jsx'
import Competences from './competences.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Loader from './loader';
import usePageLoader from './usePageLoader';

function App() {
    const loading = usePageLoader(1500);

  if (loading) {
    return <Loader />;
  }
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/profil" element={<Profil />} />
            {/* <Route path="/veille" element={<Veille />} /> */}
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App