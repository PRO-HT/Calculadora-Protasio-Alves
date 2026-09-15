function calcularMedia() {
    // Pegar os valores e substituir vírgulas por pontos
    const nota1 = parseFloat(document.getElementById('nota1').value.replace(',', '.')) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value.replace(',', '.')) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value.replace(',', '.')) || 0;

    // Validação
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert('Por favor, insira notas válidas entre 0 e 10!');
        return;
    }

    if (nota1 === 0 && nota2 === 0 && nota3 === 0) {
        alert('Por favor, insira pelo menos uma nota!');
        return;
    }

    // Cálculo: (nota1 × 3 + nota2 × 3 + nota3 × 4) / 10
    const media = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10;

    // Exibir resultado com vírgula
    document.getElementById('mediaFinal').textContent = media.toFixed(2).replace('.', ',');
    
    const statusDiv = document.getElementById('status');
    if (media >= 6.0) {
        statusDiv.textContent = '✓ APROVADO';
        statusDiv.className = 'status aprovado';
    } else {
        statusDiv.textContent = '✗ REPROVADO';
        statusDiv.className = 'status reprovado';
    }

    document.getElementById('resultado').classList.add('show');
}

// Permitir cálculo com Enter
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularMedia();
        }
    });
});