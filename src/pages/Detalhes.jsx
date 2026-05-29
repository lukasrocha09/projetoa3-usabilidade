import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Detalhes() {
  const { id } = useParams()
  const [jogo, setJogo] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erroDaApi, setErroDaApi] = useState(false)

  useEffect(() => {
    fetch(`/api/game?id=${id}`)
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Erro ao buscar detalhes')
        return resposta.json()
      })
      .then((dados) => {
        setJogo(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error('Erro ao buscar detalhes do jogo:', erro)
        setErroDaApi(true)
        setCarregando(false)
      })
  }, [id])

  function gerarDescricaoPortugues(jogo) {
    return `${jogo.title} é um jogo gratuito do gênero ${jogo.genre}, disponível para ${jogo.platform}. O título foi desenvolvido por ${jogo.developer || 'um estúdio não informado'} e publicado por ${jogo.publisher || 'uma distribuidora não informada'}. Esta página organiza as principais informações do jogo em português, facilitando a leitura e a navegação para o usuário.`
  }

  if (carregando) {
    return (
      <main className="page-container">
        <div className="status-box loading">
          Carregando detalhes do jogo...
        </div>
      </main>
    )
  }

  if (erroDaApi) {
    return (
      <main className="page-container">
        <div className="status-box error">
          Não foi possível carregar as informações deste jogo.
        </div>

        <Link to="/" className="btn">
          Voltar ao catálogo
        </Link>
      </main>
    )
  }

  if (!jogo) {
    return (
      <main className="page-container">
        <div className="status-box empty">
          As informações deste jogo não foram encontradas.
        </div>

        <Link to="/" className="btn">
          Voltar ao catálogo
        </Link>
      </main>
    )
  }

  return (
    <main className="page-container">
      <section className="details-page">
        <Link to="/" className="back-link">
          ← Voltar ao catálogo
        </Link>

        <article className="details-card">
          <div className="details-image-area">
            <img
              src={jogo.thumbnail}
              alt={`Capa do jogo ${jogo.title}`}
            />
          </div>

          <div className="details-content">
            <span className="eyebrow">Detalhes do jogo</span>

            <h1>{jogo.title}</h1>

            <div className="game-meta details-meta">
              <span className="tag">🎯 {jogo.genre}</span>
              <span className="tag">💻 {jogo.platform}</span>
              {jogo.release_date && (
                <span className="tag">📅 {jogo.release_date}</span>
              )}
            </div>

            <p className="descricao-portugues">
              {gerarDescricaoPortugues(jogo)}
            </p>

            <div className="details-list">
              <p>
                <strong>Gênero:</strong> {jogo.genre || 'Não informado'}
              </p>

              <p>
                <strong>Plataforma:</strong> {jogo.platform || 'Não informado'}
              </p>

              <p>
                <strong>Desenvolvedor:</strong> {jogo.developer || 'Não informado'}
              </p>

              <p>
                <strong>Distribuidora:</strong> {jogo.publisher || 'Não informado'}
              </p>

              <p>
                <strong>Data de lançamento:</strong> {jogo.release_date || 'Não informado'}
              </p>
            </div>

            <div className="details-actions">
              {jogo.game_url && (
                <a
                  href={jogo.game_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Acessar jogo
                </a>
              )}

              <Link to="/" className="btn btn-secondary">
                Voltar
              </Link>
            </div>

            {jogo.description && (
              <details className="original-description">
                <summary>Ver descrição original da API</summary>
                <p>{jogo.description}</p>
              </details>
            )}
          </div>
        </article>
      </section>
    </main>
  )
}

export default Detalhes