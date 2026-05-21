# projetoa3-usabilidade
GRUPO:

- Lukas Rocha
- Thiago Henrique
- Julia Campani
- Luiz Garcia
- Vinicius Paiutti
- Enzo S. Araujo


# Catálogo de Jogos Free-to-Play 🎮

## Sobre o Projeto
Este é um projeto acadêmico focado no desenvolvimento de uma interface web para listagem e descoberta de jogos gratuitos. O objetivo principal é construir uma aplicação rápida e responsiva, aplicando os conceitos fundamentais de desenvolvimento frontend em React integrados a boas práticas de experiência do usuário (UX).

## Arquitetura e Fonte de Dados
A aplicação é alimentada de forma dinâmica consumindo a [FreeToGame API](https://www.freetogame.com/api_doc). 
* **Endpoint Principal:** As requisições são feitas para a rota `/api/games`, que nos fornece um catálogo robusto de títulos contendo nome, plataforma, imagens e gênero.

## Escopo e Fluxo de Navegação
O projeto foi estruturado com foco em uma navegação simples e direta, no formato Single Page Application (SPA).
O fluxo do usuário baseia-se em:
1. **Acesso inicial:** O usuário entra na aplicação e visualiza imediatamente um feedback de carregamento (comunicando que o sistema está buscando os dados).
2. **Descoberta:** Os dados da API são renderizados em uma tela principal limpa, exibindo os jogos em um formato de grade (cards) de fácil leitura.

## Diretrizes de Usabilidade e Acessibilidade
Para garantir que a aplicação seja intuitiva e acessível para o maior número de pessoas possível, o desenvolvimento segue as seguintes diretrizes:

* **Foco no Usuário (Heurísticas):**
  * Manter o usuário sempre informado sobre o que está acontecendo, com indicadores visuais durante o consumo da API.
  * Utilizar o conceito de "vitrine" ou "catálogo", que é familiar no mundo real.
  * Padronização rigorosa no layout dos cards para manter a consistência visual.
  * Tratamento de falhas no código para que, em caso de erro na API, a tela não quebre bruscamente.
  * Interface minimalista, destacando apenas as informações essenciais dos jogos.

* **Acessibilidade Inclusiva (WCAG):**
  * Todas as capas de jogos (`thumbnails`) conterão textos alternativos (`alt`) descritivos para leitores de tela.
  * A paleta de cores será escolhida respeitando níveis adequados de contraste entre texto e fundo.
  * A estrutura HTML será desenvolvida permitindo a navegação completa pelas opções usando a tecla `Tab`.
  * Utilização de tags semânticas hierárquicas (`<h1>`, `<h2>`, etc.) para estruturar a informação.
  * O layout será totalmente responsivo, garantindo que o texto e os cards não quebrem caso o usuário utilize zoom no navegador.