import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Detalhes from './pages/Detalhes'
import Sobre from './pages/Sobre'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="site-header-content">
          <Link to="/" className="brand" aria-label="Ir para o catálogo de jogos">
            <span className="brand-icon" aria-hidden="true">🎮</span>
            <span>Home</span>
          </Link>

          <nav className="nav-menu" aria-label="Navegação principal">
            <Link to="/">Catálogo de Jogos</Link>
            <Link to="/sobre">Sobre o Projeto</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo/:id" element={<Detalhes />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App