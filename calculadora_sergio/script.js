const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.botoes button');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent;

    switch (valor) {
      case 'C':
        visor.value = '';
        break;

      case '←':
        visor.value = visor.value.slice(0, -1);
        break;

      case '=':
        try {
          const resultado = eval(visor.value);
          visor.value = resultado;
        } catch {
          visor.value = 'Erro';
        }
        break;

      default:
        const operadores = ['+', '-', '*', '/'];
        const ultimoChar = visor.value.slice(-1);

        if (operadores.includes(valor)) {
          if (visor.value === '' || operadores.includes(ultimoChar)) {
            return;
          }
        }
        if (valor === '.') {
          const partes = visor.value.split(/[\+\-\*\/]/);
          const ultimaParte = partes[partes.length -1];
          if (ultimaParte.includes('.')) {
            return; 
          }
        }

        visor.value += valor;
    }
  });
});
