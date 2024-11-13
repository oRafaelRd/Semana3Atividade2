const estudantes = [ // Array de objetos que contem o nome dos estudantes e suas notas
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   
   const estudantesMedias = estudantes.map((estudante) => {
    const total = estudante.notas.reduce((soma, nota) => soma + nota); // Soma a nota de cada estudante
    let {nome} = estudante; // Guarda o nome do estudante para o resultado final
    return { nome, media: total / estudante.notas.length };  // Faz o retorno do objeto com os nomes e as médias dos alunos 
   });
   
   
   const melhoresMedias = estudantesMedias.filter(   // Filtra os estudantes com as médias maiores que 90
    (student) => student.media > 90,
   );
   