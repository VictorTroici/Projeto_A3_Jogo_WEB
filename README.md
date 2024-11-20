<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha Interativo - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(to right, #f8f9fa, #e9ecef);
            padding: 20px;
        }

        h1, h2, h3 {
            text-align: center;
            color: #343a40;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        h2 {
            margin-top: 40px;
        }

        p {
            text-align: justify;
            margin-bottom: 15px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            margin: 5px 0;
            padding-left: 15px;
            position: relative;
        }

        ul li::before {
            content: "✔";
            color: #007bff;
            font-weight: bold;
            margin-right: 8px;
        }

        .code-block {
            background: #f1f1f1;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            overflow-x: auto;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .center {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Jogo da Velha Interativo</h1>
    <p class="center">
        <img src="game-preview.png" alt="Prévia do Jogo" width="400"> <!-- Substitua "game-preview.png" pelo caminho correto -->
    </p>

    <h2>Sobre o Projeto</h2>
    <p>
        Este é um <strong>Jogo da Velha interativo</strong> desenvolvido com React e estilizado com Bootstrap.
        Criado para explorar conceitos de desenvolvimento frontend e aplicar as <strong>heurísticas de usabilidade de Nielsen</strong>,
        o jogo oferece uma interface intuitiva e amigável, além de ser responsivo para diferentes dispositivos.
    </p>

    <h2>Funcionalidades</h2>
    <ul>
        <li><strong>Modos de Jogo:</strong> Jogue contra um amigo ou contra a máquina.</li>
        <li><strong>Feedback Visual:</strong> Indicação do jogador atual, placar e status do jogo.</li>
        <li><strong>Controles:</strong> Botões para reiniciar ou avançar para a próxima rodada.</li>
        <li><strong>Design Responsivo:</strong> Interface adaptada para diferentes dispositivos.</li>
    </ul>

    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>React:</strong> Para criação da interface interativa.</li>
        <li><strong>Bootstrap:</strong> Para design responsivo.</li>
        <li><strong>CSS Customizado:</strong> Ajustes estéticos e funcionais.</li>
        <li><strong>Node.js:</strong> Para gerenciamento do ambiente de desenvolvimento.</li>
    </ul>

    <h2>Heurísticas de Nielsen Aplicadas</h2>
    <ul>
        <li><strong>Visibilidade do Status do Sistema:</strong> Feedback em tempo real (jogador atual, placar).</li>
        <li><strong>Controle e Liberdade do Usuário:</strong> Possibilidade de reiniciar ou avançar rodadas.</li>
        <li><strong>Prevenção de Erros:</strong> Bloqueio de jogadas inválidas.</li>
        <li><strong>Reconhecimento em vez de Memorização:</strong> Interface intuitiva e acessível.</li>
        <li><strong>Estética e Design Minimalista:</strong> Layout limpo e funcional.</li>
    </ul>

    <h2>Como Rodar o Projeto</h2>
    <h3>Pré-requisitos</h3>
    <p>Certifique-se de ter o Node.js instalado na sua máquina.</p>
    <h3>Instalação</h3>
    <div class="code-block">
        <code>
            git clone https://github.com/seu-usuario/jogo-da-velha.git<br>
            cd jogo-da-velha<br>
            npm install
        </code>
    </div>
    <h3>Executando o Projeto</h3>
    <div class="code-block">
        <code>
            npm start
        </code>
    </div>
    <p>Acesse o jogo no navegador: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>

    <h2>Como Jogar</h2>
    <ol>
        <li>Escolha um modo de jogo (Contra Amigo ou Contra Máquina).</li>
        <li>Faça sua jogada clicando em uma célula vazia no tabuleiro.</li>
        <li>O jogo alterna automaticamente entre os jogadores.</li>
        <li>Use os botões para reiniciar ou avançar rodadas.</li>
    </ol>

    <h2>Contribuindo</h2>
    <p>
        Sinta-se à vontade para contribuir com melhorias! Faça um fork do repositório, crie um branch,
        faça as alterações e envie um Pull Request.
    </p>

    <h2>Licença</h2>
    <p>Este projeto está licenciado sob a licença MIT. Consulte o arquivo <code>LICENSE</code> para mais informações.</p>

    <h2>Agradecimentos</h2>
    <p>
        Este projeto foi desenvolvido como parte de uma atividade acadêmica.
        Agradecemos aos professores e colegas pelo suporte e feedback ao longo do desenvolvimento.
    </p>

    <p class="center">
        <strong>Autor:</strong> <a href="https://github.com/seu-usuario" target="_blank">Seu Nome</a>
    </p>
</body>
</html>
