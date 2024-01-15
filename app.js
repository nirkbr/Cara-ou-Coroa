const sectionBoardGame = window.document.getElementById('BoardGame');
const botao = window.document.getElementById('jogar');
const resultado = window.document.getElementById('resultado');

function resultadoMoeda() {
    const numeroAleatorio = Math.random();
    if (numeroAleatorio > 0.5) {
        alert(`Deu cara`)
    }
    else {
        alert('deu corôa')
    }
}


botao.onclick = resultadoMoeda;