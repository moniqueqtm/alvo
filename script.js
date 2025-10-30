// Variáveis criadas para o jogo; valores podem ser alterados
let score = 0; // Pontuação do jogador
let time = 30; // Tempo do jogo em segundos
let gameInterval; // Vai guardar o temporizador do tempo
let moveInterval; // Vai guardar o temporizador do movimento do alvo

//Elementos do HTML guardados em variáveis; valores não podem ser alterados
const target = document.getElementById("target"); // Obtém a <div> do alvo que está no HTML
const scoreDisplay = document.getElementById("score"); // Obtém o <span> onde exibimos a pontuação no HTML
const timeDisplay = document.getElementById("time"); // Obtém o <span> onde exibimos o tempo no HTML
const startBtn = document.getElementById("start-btn"); // Obtém o botão de iniciar/reiniciar do HTML

// Iniciar o jogo
function startGame() { // Declara a função que prepara tudo para começar uma nova partida

    // Zera os valores
    score = 0; // Zera a pontuação para iniciar
    time = 30; // Recomeça o tempo para 30 segundos
    scoreDisplay.textContent = score; // Mostra a pontuação zerada na tela
    timeDisplay.textContent = time; // Mostra o tempo inicial na tela

    // Limpa intervalos antigos (caso esteja reiniciando)
    clearInterval(gameInterval); // Para qualquer contagem regressiva que ainda esteja ativa
    clearInterval(moveInterval); // Para qualquer movimentação automática do alvo ainda ativa

    moveTarget(); // Posiciona e exibe o alvo imediatamente ao iniciar

    moveInterval = setInterval(moveTarget, 1000); // Move o alvo a cada 1 segundo 
    gameInterval = setInterval(countdown, 1000); // Chama a função de contagem regressiva a cada 1 segundo
}    

// Botão de iniciar/reiniciar
startBtn.onclick = startGame; // Quando o usuário clicar no botão, a função startGame será executada

// Função para mover o alvo para posição aleatória
function moveTarget() { // Declara a função responsável por posicionar o alvo em coordenadas aleatórias
    const gameArea = document.getElementById("game-area"); // Pega a área de jogo para saber seus limites

    // Pega o tamanho máximo para não deixar o alvo sair da área
    const maxX = gameArea.clientWidth - target.clientWidth; // Calcula a maior posição X possível (largura área - largura alvo)
    const maxY = gameArea.clientHeight - target.clientHeight; // Calcula a maior posição Y possível (altura área - altura alvo)
    
    // Gera posições aleatórias dentro da área
    const randomX = Math.floor(Math.random() * maxX); // Gera um número inteiro aleatório entre 0 e maxX
    const randomY = Math.floor(Math.random() * maxY); // Gera um número inteiro aleatório entre 0 e maxY

    // Coloca o alvo na posição sorteada
    target.style.left = randomX + "px"; // Atualiza a posição horizontal (esquerda) do alvo em pixels
    target.style.top = randomY + "px"; // Atualiza a posição vertical (topo) do alvo em pixels

    // Faz o alvo aparecer (se estava escondido)
    target.style.display = "block"; // Garante que o alvo esteja visível durante o jogo
}

// Contagem regressiva
function countdown() { // Declara a função que diminui o tempo e verifica o fim do jogo
    time--; // Diminui o tempo em 1 segundo
    timeDisplay.textContent = time; // Atualiza o valor mostrado do tempo no HTML

    if (time <= 0) { // Verifica se o tempo acabou (chegou a zero ou menor)
        clearInterval(gameInterval); // Para o intervalo que controla a contagem de tempo
        clearInterval(moveInterval); // Para o intervalo que move o alvo
        target.style.display = "none"; // Esconde o alvo para indicar que o jogo terminou
        alert("Fim de jogo! Sua pontuação foi: " + score); // Mostra uma janela com a pontuação final
    }
}

// Ao clicar no alvo
target.onclick = function() { // Define a função que será executada quando o alvo for clicado
    score++; // Aumenta a pontuação em 1 ponto a cada clique no alvo
    scoreDisplay.textContent = score; // Atualiza o texto do elemento de pontuação no HTML
    moveTarget(); // Move o alvo imediatamente para uma nova posição após o clique
};




