// script.js


// Função para aumentar o tamanho da fonte
function increaseFontSize() {
    const body = document.body;
    const currentFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    const newSize = parseInt(currentFontSize) + 2 + 'px';
    body.style.fontSize = newSize;

    // Informe os leitores de tela sobre a alteração no tamanho da fonte
    const message = `Tamanho da fonte aumentado para ${newSize}`;
    console.log(message); // Simulando saída para leitores de tela
}


// Adicionar eventos de clique aos botões de acessibilidade
document.getElementById('increase-font-button').addEventListener('click', increaseFontSize);
