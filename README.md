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

## 🛠️ Tecnologias e Ferramentas Utilizadas
* **React:** Biblioteca principal para construção da interface.
* **Vite:** Ferramenta de build e servidor de desenvolvimento local.
* **ESLint:** Ferramenta de análise estática nativa do Vite para garantir a qualidade do código.
* **FreeToGame API:** Fonte de dados externa.
* **React Router DOM:** Biblioteca utilizada para navegação entre as rotas da aplicação.
* **CSS responsivo:** Utilizado para organizar o catálogo em cards, aplicar layout em grid e adaptar a interface a diferentes tamanhos de tela.
* **HTML semântico:** Utilizado para melhorar a estrutura da página e a acessibilidade.

## 🚀 Como Executar o Projeto Localmente
Para rodar esta aplicação na sua máquina, certifique-se de ter o **Node.js** instalado.

1. **Clone o repositório:**
   `git clone https://github.com/lukasrocha09/projetoa3-usabilidade.git`
2. **Acesse a pasta do projeto:**
   `cd projetoa3-usabilidade`
3. **Instale as dependências:**
   `npm install`
4. **Inicie o servidor de desenvolvimento:**
   `npm run dev`
5. **Acesse no navegador:**
   Abra a URL exibida no terminal, normalmente: `http://localhost:5173`

## Arquitetura e Fonte de Dados
A aplicação é alimentada de forma dinâmica consumindo a [FreeToGame API](https://www.freetogame.com/api_doc). 
* **Endpoint Principal:** As requisições são feitas para a rota `/api/games`, que nos fornece um catálogo robusto de títulos contendo nome, plataforma, imagens e gênero.
* **Consumo e Proxy:** O frontend faz requisições diretas para `/api/games`. Durante o desenvolvimento local, o **Vite intercepta essa rota e atua como proxy**, encaminhando a requisição para a FreeToGame API (evitando bloqueios de CORS no navegador).
* **Autenticação:** A API utilizada é pública. No estado atual do projeto, **não há necessidade de uso de chaves de API (API Keys)** ou credenciais.

## Escopo e Fluxo de Navegação
O projeto foi estruturado com foco em uma navegação simples e direta, no formato Single Page Application (SPA).
O fluxo do usuário baseia-se em:

1. **Acesso inicial:** O usuário entra na aplicação e visualiza imediatamente um feedback de carregamento (comunicando que o sistema está buscando os dados).

2. **Busca e filtros:** o usuário pode pesquisar jogos pelo nome e filtrar os resultados por gênero ou plataforma.

3. **Descoberta:** Os dados da API são renderizados em uma tela principal limpa, exibindo os jogos em um formato de grade (cards) de fácil leitura.

4. **Detalhes:** ao clicar em “Ver detalhes”, o usuário acessa uma tela específica com informações completas do jogo.

5. **Retorno:** na tela de detalhes, o usuário pode voltar ao catálogo.

6. **Descrição original:** caso queira, o usuário pode expandir a descrição original retornada pela API.

## Diretrizes de Usabilidade e Acessibilidade
Para garantir que a aplicação seja intuitiva e acessível para o maior número de pessoas possível, o desenvolvimento segue as seguintes diretrizes:

* **Foco no Usuário (Heurísticas):**
  * Manter o usuário sempre informado sobre o que está acontecendo, com indicadores visuais durante o consumo da API.
  * Utilizar o conceito de "vitrine" ou "catálogo", que é familiar no mundo real.
  * Padronização rigorosa no layout dos cards para manter a consistência visual.
  * Tratamento de falhas no código para que, em caso de erro na API, a tela não 
  quebre bruscamente.
  * Interface minimalista, destacando apenas as informações essenciais dos jogos.
  * Busca por nome do jogo para facilitar a localização de títulos específicos.
  * Filtros por gênero e plataforma para tornar a navegação mais eficiente.
  * Contadores visuais indicando o total de jogos da API e a quantidade exibida após os filtros.
  * Cards padronizados para manter consistência visual.
  * Botões claros, como “Ver detalhes”, “Voltar” e “Acessar jogo”.
  * Descrição adaptada em português para facilitar a compreensão do usuário.
  * Descrição original da API mantida em área expansível, evitando excesso de informação na tela.

* **Acessibilidade Inclusiva (WCAG):**
  * Todas as capas de jogos (`thumbnails`) conterão textos alternativos (`alt`) descritivos para leitores de tela.
  * A paleta de cores será escolhida respeitando níveis adequados de contraste entre texto e fundo.
  * A estrutura HTML será desenvolvida permitindo a navegação completa pelas opções usando a tecla `Tab`.
  * Utilização de tags semânticas hierárquicas (`<h1>`, `<h2>`, etc.) para estruturar a informação.
  * O layout será totalmente responsivo, garantindo que o texto e os cards não quebrem caso o usuário utilize zoom no navegador.
  * Os campos de busca e filtros possuem `label`, facilitando a identificação por usuários e leitores de tela.
  * Os links, botões, campos de texto e filtros possuem foco visível para navegação pelo teclado.
  * As imagens dos jogos possuem atributo `alt` com descrição do conteúdo.
  * A aplicação utiliza elementos semânticos como `main`, `section`, `article`, `header` e `nav`.
  * A página de detalhes apresenta uma descrição em português para facilitar a compreensão.
  * A descrição original da API fica recolhida em um elemento expansível, evitando excesso de conteúdo visual.
  * O layout em grid é responsivo e se adapta a diferentes tamanhos de tela.

  ## Funcionalidades Implementadas

   Até o momento, a aplicação possui:

* Consumo real da FreeToGame API.
* Exibição dos jogos em cards.
* Busca por nome do jogo.
* Filtro por gênero.
* Filtro por plataforma.
* Contador com o total de jogos recebidos da API.
* Contador com a quantidade de jogos exibidos após os filtros.
* Tela de detalhes para cada jogo.
* Descrição adaptada em português na tela de detalhes.
* Descrição original da API disponível em uma área expansível.
* Botão para acessar o jogo.
* Botão para voltar ao catálogo.
* Tratamento de carregamento, erro e estado vazio.

## Tratamento de Estados

A aplicação trata os principais estados esperados em uma interface que consome API:

* **Carregamento:** exibido enquanto os dados estão sendo buscados.
* **Erro:** exibido quando ocorre falha na comunicação com a API.
* **Vazio:** exibido quando a API não retorna dados ou quando os filtros não encontram resultados.
* **Sucesso:** exibido quando os dados são carregados e apresentados corretamente na interface.

## Observação sobre idioma da API

A FreeToGame API retorna algumas descrições em inglês. Para melhorar a experiência do usuário, a aplicação apresenta uma descrição adaptada em português na tela de detalhes, usando os dados principais do jogo, como título, gênero, plataforma, desenvolvedor e distribuidora.

A descrição original da API foi mantida em uma área expansível, garantindo transparência sobre a origem dos dados.