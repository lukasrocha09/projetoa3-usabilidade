import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Cria um estado para armazenar a lista de jogos (começa como um array vazio)
  const [jogos, setJogos] = useState([])

  useEffect(() => {
    // Faz a requisição usando o nosso proxy do Vite (caminho '/api/games')
    fetch('/api/games')
      .then((resposta) => resposta.json()) // Transforma a resposta em JSON
      .then((dados) => {
        setJogos(dados) // Guarda os dados no estado 'jogos'
        console.log("Dados recebidos da API:", dados) // Mostra no console para testarmos
      })
      .catch((erro) => console.error("Erro ao buscar jogos:", erro))
  }, []) // Os colchetes vazios garantem que isso rode apenas 1 vez ao abrir a tela

  return (
    <div>
      <h1>Catálogo de Jogos</h1>
      <p>Total de jogos encontrados: {jogos.length}</p>
    </div>
  )
}

export default App