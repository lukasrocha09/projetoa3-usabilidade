### GRUPO:
* Lukas Rocha
* Thiago Henrique
* Julia Campani
* Luiz Garcia
* Vinicius Paiutti
* Enzo S. Araujo

# Catálogo de Jogos Free-to-Play 🎮

## Sobre o Projeto
Este é um projeto acadêmico focado no desenvolvimento de uma interface web para listagem e descoberta de jogos gratuitos. A aplicação consome dados reais da FreeToGame API, exibe os jogos em formato de catálogo, permite busca por nome, filtros por gênero e plataforma, além de possuir uma tela de detalhes para cada jogo. O objetivo principal é construir uma aplicação rápida e responsiva, aplicando os conceitos fundamentais de desenvolvimento frontend em React integrados a boas práticas de experiência do usuário (UX).

## 🎯 Problema e Público-Alvo
**O Problema:** Jogadores que buscam opções de entretenimento sem custo financeiro (Free-to-Play) frequentemente perdem tempo garimpando títulos de qualidade em plataformas fragmentadas, lidando com interfaces poluídas e sem filtros adequados.

**Público-Alvo:** Gamers com orçamento limitado, jogadores casuais em busca de novos títulos e usuários que dependem de navegação acessível por teclado e leitores de tela. A aplicação centraliza e facilita essa descoberta.

## 🛠️ Tecnologias e Ferramentas Utilizadas
* **React & Vite:** Construção da interface no formato SPA (Single Page Application) com servidor de desenvolvimento ultra-rápido.
* **React Router DOM:** Gerenciamento das rotas (`/`, `/jogo/:id`).
* **CSS Puro:** Estilização componentizada com uso de CSS Grid, Flexbox e variáveis (`global.css`, `home.css`).
* **FreeToGame API:** Fonte de dados consumida dinamicamente via `fetch`. Durante o desenvolvimento, o Vite atua como proxy para evitar bloqueios de CORS.

## 🚀 Como Executar o Projeto Localmente
Certifique-se de ter o **Node.js** instalado na sua máquina.

1. **Clone o repositório:** `git clone https://github.com/lukasrocha09/projetoa3-usabilidade.git`
2. **Acesse a pasta:** `cd projetoa3-usabilidade`
3. **Instale as dependências:** `npm install`
4. **Inicie o servidor local:** `npm run dev`
5. **Acesse no navegador:** `http://localhost:5173`

## 🧠 Aplicação das Heurísticas de Nielsen
A interface foi projetada com base nos princípios de usabilidade de Jakob Nielsen. Exemplos práticos aplicados no código:

1. **Visibilidade do Status do Sistema:** Uso de `status-box loading` durante as requisições `fetch` e contadores dinâmicos indicando "Exibindo: X jogos".
2. **Correspondência entre o Sistema e o Mundo Real:** Uso do conceito familiar de "Vitrine", filtros com terminologia gamer e conversão da descrição em inglês para um resumo contextualizado em português.
3. **Prevenção de Erros:** Os `selects` de filtros impedem que o usuário digite parâmetros inválidos.
4. **Reconhecer, Diagnosticar e Recuperar-se de Erros:** Implementação de uma interface amigável (`status-box error`) caso a API da FreeToGame fique fora do ar, oferecendo um botão claro para "Voltar ao catálogo".
5. **Estética e Design Minimalista:** Remoção de informações redundantes (como contadores duplicados ou descrições em dois idiomas) para focar apenas nas informações vitais de decisão do usuário.

## ♿ Acessibilidade e Critérios WCAG
Para garantir um uso inclusivo, o código segue as diretrizes de acessibilidade:

* **Navegação por Teclado:** Implementação rigorosa do estado `:focus` e `:focus-within` no CSS com `outline: 3px solid var(--focus)`, permitindo navegação total via tecla `Tab`.
* **Semântica HTML:** Estruturação correta usando tags como `<main>`, `<section>`, `<article>`, além do uso de atributos `aria-label` e `aria-labelledby` para identificar seções para leitores de tela.
* **Formulários Acessíveis:** Todos os inputs e selects de filtros possuem tags `<label>` com o atributo `htmlFor` corretamente linkado aos `ids` dos campos.
* **Textos Alternativos:** A tag `<img>` de todos os cards recebe o atributo dinâmico `alt={"Capa do jogo " + jogo.title}`, auxiliando deficientes visuais.
* **Contraste de Cores:** Ajuste no peso das tipografias e garantia de contraste adequado (texto claro sobre fundos escuros e degradês suaves).