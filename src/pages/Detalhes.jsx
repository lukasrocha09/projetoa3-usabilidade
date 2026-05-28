import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Detalhes() {
  const { id } = useParams()
  const [jogo, setJogo] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erroDaApi, setErroDaApi] = useState(false) // <-- Estado de erro explícito

  useEffect(() => {
    fetch(`/api/game?id=${id}`)
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Erro ao buscar detalhes")
        return resposta.json()
      })
      .then((dados) => {
        setJogo(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error("Erro ao buscar detalhes do jogo:", erro)
        setErroDaApi(true) // <-- Ativa o estado de erro
        setCarregando(false)
      })
  }, [id])

  // 1. TRATAMENTO DE LOADING (Carregando)
  if (carregando) {
    return <div className="container"><h2>Carregando detalhes do jogo...</h2></div>
  }

  // 2. TRATAMENTO DE ERRO (Falha de comunicação ou ID inexistente na API)
  if (erroDaApi) {
    return <div className="container"><h2>Não foi possível carregar as informações deste jogo. Tente novamente mais tarde.</h2></div>
  }

  // 3. TRATAMENTO DE ESTADO VAZIO (API respondeu mas o objeto veio nulo/vazio)
  if (!jogo) {
    return <div className="container"><h2>As informações deste jogo não foram encontradas.</h2></div>
  }

  // SE TUDO DEU CERTO, EXIBE OS DADOS
  return (
    <div className="container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#fff', textDecoration: 'none', background: '#333', padding: '10px 15px', borderRadius: '5px' }}>
        ⬅ Voltar para o Catálogo
      </Link>
      
      <h1>{jogo.title}</h1>
      <img 
        src={jogo.thumbnail} 
        alt={`Capa do jogo ${jogo.title}`} 
        style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} 
      />
      
      <div style={{ textAlign: 'left', lineHeight: '1.6', fontSize: '18px' }}>
        <p><strong>Gênero:</strong> {jogo.genre}</p>
        <p><strong>Plataforma:</strong> {jogo.platform}</p>
        <p><strong>Desenvolvedora:</strong> {jogo.developer}</p>
        <p><strong>Distribuidora:</strong> {jogo.publisher}</p>
        <p><strong>Data de Lançamento:</strong> {jogo.release_date}</p>
        
        <h3 style={{ marginTop: '20px' }}>Descrição:</h3>
        <p><em>(Descrição original em inglês mantida via API)</em></p>
        <p style={{ marginTop: '10px' }}>{jogo.description}</p>
      </div>
    </div>
  )
}

export default Detalhes