const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const somaTotal = [...a, ...b].reduce((acumulador, num) => // Espalha o valor em uma lista e usa o reduce para somar todos os valores da lista
    acumulador + num, 0);

console.log(somaTotal)