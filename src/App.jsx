import './navbar.jsx'
import './styles/App.css'
import Navbar from './navbar.jsx'
import Accueil from './accueil.jsx'
import Projets from './projets.jsx'
import Stages from './stages.jsx'
import Competences from './competences.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WorldMapBackground from './worldMapBackground.jsx'
import Loader from './loader';
import usePageLoader from './usePageLoader';

function App() {
    const loading = usePageLoader(1500); // 2 secondes pour le loader

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
