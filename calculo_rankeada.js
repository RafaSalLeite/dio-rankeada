var vitorias = 30;
var derrotas = 5;

// função pra saber o total de vitórias
function totalVitorias(vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas;

  return saldoVitorias;
}

//pra ver as rankeadas
function rankeadas(saldoVitorias) {
  var nivel = '';

  if (saldoVitorias <= 10) {
    nivel = 'ferro';
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = 'bronze';
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = 'prata';
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = 'ouro';
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = 'diamante';
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = 'lendário';
  } else if (saldoVitorias >= 101) {
    nivel = 'imortal';
  }

  return nivel;
}

var saldoVitorias = totalVitorias(vitorias, derrotas);
var nivel = rankeadas(saldoVitorias);

console.log(
  'O herói tem de saldo de ' + saldoVitorias + ' está no nível de ' + nivel
);
