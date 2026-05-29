import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  const [jogos, setJogos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erroDaApi, setErroDaApi] = useState(false)

  const [busca, setBusca] = useState('')
  const [generoSelecionado, setGeneroSelecionado] = useState('todos')
  const [plataformaSelecionada, setPlataformaSelecionada] = useState('todas')

  useEffect(() => {
    fetch('/api/games')
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Erro na rede')
        return resposta.json()
      })
      .then((dados) => {
        setJogos(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error('Erro ao buscar jogos:', erro)
        setErroDaApi(true)
        setCarregando(false)
      })
  }, [])

  const generos = [...new Set(jogos.map((jogo) => jogo.genre).filter(Boolean))]
  const plataformas = [...new Set(jogos.map((jogo) => jogo.platform).filter(Boolean))]

  const jogosFiltrados = jogos.filter((jogo) => {
    const nomeDoJogo = jogo.title?.toLowerCase() || ''
    const buscaDigitada = busca.toLowerCase()

    const nomeCombina = nomeDoJogo.includes(buscaDigitada)

    const generoCombina =
      generoSelecionado === 'todos' || jogo.genre === generoSelecionado

    const plataformaCombina =
      plataformaSelecionada === 'todas' || jogo.platform === plataformaSelecionada

    return nomeCombina && generoCombina && plataformaCombina
  })

  if (carregando) {
    return (
      <main className="page-container">
        <div className="status-box loading">
          Carregando catálogo de jogos...
        </div>
      </main>
    )
  }

  if (erroDaApi) {
    return (
      <main className="page-container">
        <div className="status-box error">
          Poxa, não conseguimos conectar ao servidor. Tente novamente mais tarde.
        </div>
      </main>
    )
  }

  if (jogos.length === 0) {
    return (
      <main className="page-container">
        <div className="status-box empty">
          Nenhum jogo encontrado no catálogo no momento.
        </div>
      </main>
    )
  }

  return (
    <main className="page-container">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Catálogo gamer acessível</span>

          <h1>Encontre seu próximo jogo</h1>

          <p>
            Navegue por jogos gratuitos, descubra novos títulos e use filtros para
  encontrar rapidamente opções por nome, gênero ou plataforma.
          </p>

          <div className="hero-actions">
            <span className="counter">
              🎮 Total na API: {jogos.length}
            </span>

            <span className="counter secondary-counter">
              🔎 Exibindo: {jogosFiltrados.length}
            </span>
          </div>
        </div>
      </section>

      <section className="search-panel" aria-labelledby="titulo-busca">
        <div className="search-header">
          <h2 id="titulo-busca">Pesquisar no catálogo</h2>
          <p>
            Use a busca e os filtros para encontrar rapidamente o jogo desejado.
          </p>
        </div>

        <div className="filters-grid">
          <div className="form-group">
            <label htmlFor="busca-jogo">Nome do jogo</label>
            <input
              id="busca-jogo"
              type="text"
              placeholder="Ex: Overwatch, PUBG, Warframe..."
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="filtro-genero">Gênero</label>
            <select
              id="filtro-genero"
              value={generoSelecionado}
              onChange={(evento) => setGeneroSelecionado(evento.target.value)}
            >
              <option value="todos">Todos os gêneros</option>

              {generos.map((genero) => (
                <option key={genero} value={genero}>
                  {genero}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="filtro-plataforma">Plataforma</label>
            <select
              id="filtro-plataforma"
              value={plataformaSelecionada}
              onChange={(evento) => setPlataformaSelecionada(evento.target.value)}
            >
              <option value="todas">Todas as plataformas</option>

              {plataformas.map((plataforma) => (
                <option key={plataforma} value={plataforma}>
                  {plataforma}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {jogosFiltrados.length === 0 ? (
        <section className="status-box empty">
          Nenhum jogo foi encontrado com os filtros selecionados.
        </section>
      ) : (
        <section className="grid-jogos" aria-label="Lista de jogos encontrados">
          {jogosFiltrados.map((jogo) => (
            <article className="card-jogo" key={jogo.id}>
              <Link
                to={`/jogo/${jogo.id}`}
                className="card-link-wrapper"
                aria-label={`Ver detalhes do jogo ${jogo.title}`}
              >
                <img
                  src={jogo.thumbnail}
                  alt={`Capa do jogo ${jogo.title}`}
                  className="imagem-jogo"
                />

                <div className="info-jogo">
                  <h2>{jogo.title}</h2>

                  <div className="game-meta">
                    <span className="tag">🎯 {jogo.genre}</span>
                    <span className="tag">💻 {jogo.platform}</span>
                  </div>

                  <p>
                    Jogo gratuito do gênero {jogo.genre}, disponível para{' '}
                    {jogo.platform}.
                  </p>

                  <span className="card-link">Ver detalhes</span>
                </div>
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Home