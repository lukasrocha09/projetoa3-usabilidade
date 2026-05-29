function Sobre() {
  return (
    <main className="page-container">
      <section className="about-simple">
        <h1>Sobre o Projeto</h1>

        <p>
          O GameVault é um catálogo de jogos gratuitos desenvolvido em React.
          A aplicação consome dados reais da FreeToGame API e permite consultar
          jogos, aplicar filtros e visualizar informações detalhadas de cada título.
        </p>

        <div className="about-simple-grid">
          <section>
            <h2>Objetivo</h2>
            <p>
              Criar uma aplicação front-end funcional, com rotas, consumo de API,
              tratamento de estados e melhorias de usabilidade e acessibilidade.
            </p>
          </section>

          <section>
            <h2>Tecnologias</h2>
            <ul>
              <li>React com Vite</li>
              <li>React Router DOM</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>FreeToGame API</li>
            </ul>
          </section>

          <section>
            <h2>Funcionalidades</h2>
            <ul>
              <li>Catálogo de jogos</li>
              <li>Busca por nome</li>
              <li>Filtro por gênero</li>
              <li>Filtro por plataforma</li>
              <li>Tela de detalhes</li>
              <li>Tratamento de carregamento, erro e estado vazio</li>
            </ul>
          </section>

          <section>
            <h2>Rotas</h2>
            <ul>
              <li><strong>/</strong> — Catálogo de jogos</li>
              <li><strong>/jogo/:id</strong> — Detalhes do jogo</li>
              <li><strong>/sobre</strong> — Sobre o projeto</li>
            </ul>
          </section>
        </div>

        <section className="about-note">
          <h2>Usabilidade e acessibilidade</h2>
          <p>
            O projeto utiliza navegação clara, cards padronizados, busca, filtros,
            feedback visual, mensagens de estado, contraste adequado, foco visível
            e textos alternativos nas imagens.
          </p>
        </section>

        <section className="about-note">
          <h2>Equipe</h2>

          <ul className="members-list">
            <li>Lukas Rocha</li>
            <li>Thiago Henrique</li>
            <li>Julia Campani</li>
            <li>Luiz Garcia</li>
            <li>Vinicius Paiutti</li>
            <li>Enzo S. Araujo</li>
          </ul>
        </section>
      </section>
    </main>
  )
}

export default Sobre