const funcionarios = [   //Array  de objetos que guarda o nome, salário e o departamento dos funcionarios
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
   const funcionariosPorDepartamento = funcionarios.reduce(   // O reduce cria um array onde a chave são os departamentos
    (acumulador, funcionario) => {                            // e os valores são os arrays de funcionarios 
      const departamento = funcionario.departamento;
      if (!acumulador[departamento]) {  // Verifica se o departamento já existe no acumulador, se não existir cria um novo
        acumulador[departamento] = [];  // Array para o departamento 
      }
      acumulador[departamento].push(funcionario); // Inicializa um objeto vazio
      return acumulador;
    },
    {},
   );
   const mediasSalarioPorDepartamento = Object.keys( // 
    funcionariosPorDepartamento,
   ).map((departamento) => {  // O map cria um novo array com o nome do departamento e a média salarial do departamento
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    );
    return {
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
   });
   
   
   const maioresPagamentos = mediasSalarioPorDepartamento.filter(  // Filtra os departamentos com uma média salarial maior que 65000
    (departamento) => departamento.media > 65000,
   );
   