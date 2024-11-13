const tamanho = prompt('Digite o tamanho da lista de números'); // Pede ao usuario para informar o tamanho da lista
const lista = new Array(tamanho).fill(null); // Cria uma lista com o tamanho informado pelo usuario e preenche os valores com Null usando o fill
lista
 .map(function (item, index) { // Usa o map para criar um novo array substituindo cada valor incrementando mais 1 ao indice
   return index + 1;
 })
 .reduce(function (acumulador, item) { // O metodo reduce multiplica todos os indices do array e guarda no acumulador
   return acumulador * item;
 });


new Array(tamanho) // Cria um novo array de números de 1 até "tamanho"
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item); // Arrow function que calcula todos os números do array


