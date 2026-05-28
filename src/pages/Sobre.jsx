import React from 'react'

function Sobre() {
  return (
    <div className="container" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Sobre o Projeto</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2>🎯 Objetivo</h2>
        <p style={{ lineHeight: '1.6', fontSize: '18px' }}>
          Este é um projeto acadêmico focado no desenvolvimento de uma interface web para listagem e descoberta de jogos gratuitos. O objetivo principal é construir uma aplicação rápida e responsiva, aplicando os conceitos fundamentais de desenvolvimento frontend em React integrados a boas práticas de experiência do usuário (UX) e acessibilidade (WCAG).
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>🛠️ Tecnologias Utilizadas</h2>
        <ul style={{ lineHeight: '1.6', fontSize: '18px' }}>
          <li><strong>Frontend:</strong> React.js com Vite</li>
          <li><strong>Roteamento:</strong> React Router Dom (SPA)</li>
          <li><strong>Dados:</strong> Consumo em tempo real da FreeToGame API via Fetch</li>
          <li><strong>Padrões:</strong> Implementação de Heurísticas de Nielsen e Semântica Web</li>
        </ul>
      </section>

      <section>
        <h2>👨‍💻 Equipe de Desenvolvimento</h2>
        <ul style={{ lineHeight: '1.6', fontSize: '18px', listStyleType: 'square' }}>
          <li>Lukas Rocha</li>
          <li>Thiago Henrique</li>
          <li>Julia Campani</li>
          <li>Luiz Garcia</li>
          <li>Vinicius Paiutti</li>
          <li>Enzo S. Araujo</li>
        </ul>
      </section>
    </div>
  )
}

export default Sobre