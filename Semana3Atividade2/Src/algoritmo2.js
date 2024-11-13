const letras = [   // Constante que guarda uma cadeia de caracteres em formato de matriz
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
   
   
   let resultado = letras.flat().reduce((objeto, numero) => { // O flat é usado para transformar a matriz de array em um único array
    if (objeto[numero]) { // Caso a letra já exista ele incrementa o valor do item em 1
      objeto[numero] += 1;
    } else { // Se a letra não existir ele inicizializa com o valor 1
      objeto[numero] = 1;
    }
    return objeto; // Faz o retorno do objeto atualizado
   }, {});
   