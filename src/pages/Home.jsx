import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  const [jogos, setJogos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erroDaApi, setErroDaApi] = useState(false) // <-- ESTADO DE ERRO VOLTOU!

  useEffect(() => {
    fetch('/api/games')
      .then((resposta) => {
        // Se o servidor responder com erro (ex: erro 500), forçamos a cair no catch
        if (!resposta.ok) throw new Error("Erro na rede") 
        return resposta.json()
      })
      .then((dados) => {
        setJogos(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error("Erro ao buscar jogos:", erro)
        setErroDaApi(true) // Liga a tela de erro
        setCarregando(false)
      })
  }, [])

  // 1. TRATAMENTO DE LOADING (Carregando)
  if (carregando) {
    return <div className="container"><h2>Carregando catálogo de jogos...</h2></div>
  }

  // 2. TRATAMENTO DE ERRO (Falha na API)
  if (erroDaApi) {
    return <div className="container"><h2>Poxa, não conseguimos conectar ao servidor. Tente novamente mais tarde.</h2></div>
  }

  // 3. TRATAMENTO DE ESTADO VAZIO (API respondeu, mas a lista veio zerada)
  if (jogos.length === 0) {
    return <div className="container"><h2>Nenhum jogo encontrado no catálogo no momento.</h2></div>
  }

  // SE TUDO DEU CERTO, EXIBE A VITRINE (Dados Exibidos)
  return (
    <div className="container">
      <h1>Catálogo de Jogos</h1>
      <p>Total de jogos encontrados: {jogos.length}</p>

      <div className="grid-jogos">
        {jogos.map((jogo) => (
          <Link 
            to={`/jogo/${jogo.id}`} 
            key={jogo.id} 
            className="card-jogo"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit', marginBottom: '20px' }}
          >
            <img 
              src={jogo.thumbnail} 
              alt={`Capa do jogo ${jogo.title}`} 
              className="imagem-jogo"
            />
            <div className="info-jogo">
              <h3>{jogo.title}</h3>
              <p><strong>Gênero:</strong> {jogo.genre}</p>
              <p><strong>Plataforma:</strong> {jogo.platform}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home