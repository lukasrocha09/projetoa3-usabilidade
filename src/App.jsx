import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Detalhes from './pages/Detalhes'
import Sobre from './pages/Sobre'

function App() {
  return (
    <BrowserRouter>
      {/* 🌐 MENU GLOBAL: Fica fixo no topo de todas as páginas */}
      <nav style={{ 
        padding: '15px', 
        background: '#222', 
        color: '#fff',
        marginBottom: '30px', 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center' 
      }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
          🎮 Catálogo de Jogos
        </Link>
        <Link to="/sobre" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
          📝 Sobre o Projeto
        </Link>
      </nav>

      <Routes>
        {/* Rota da Página Inicial (Catálogo) */}
        <Route path="/" element={<Home />} />
        
        {/* Rota da Página de Detalhes do Jogo (passando o ID dinamicamente) */}
        <Route path="/jogo/:id" element={<Detalhes />} />
        
        {/* Rota da Página Sobre */}
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App