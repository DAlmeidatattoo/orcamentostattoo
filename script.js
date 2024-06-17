function calcularOrcamento() {
    const tamanho = parseFloat(document.getElementById('tamanho').value);
    const estilo = document.getElementById('estilo').value;
    const cores = parseInt(document.getElementById('cores').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    const valorPorCm = 5;
    const valorHora = 30;

    let multiplicadorEstilo;
    switch (estilo) {
        case 'realismo':
            multiplicadorEstilo = 1.8;
            break;
        case 'neotradicional':
            multiplicadorEstilo = 1.6;
            break;
        case 'oldschool':
            multiplicadorEstilo = 1.4;
            break;
        case 'boldline':
            multiplicadorEstilo = 1.2;
            break;
        case 'fineline':
            multiplicadorEstilo = 1.0;
            break;
    }

    let valorBase = (tamanho * valorPorCm) + (tempo * valorHora * multiplicadorEstilo);
    if (cores > 1) {
        valorBase *= 1 + ((cores - 1) * 0.2);
    }

    document.getElementById('resultado').innerText = `O valor estimado é R$ ${valorBase.toFixed(2)}`;
}
