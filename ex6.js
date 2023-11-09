const funcionarios = [
    { salario: 310 },
    { salario: 2023 },
    { salario: 543 },
    { salario: 4200 },
  ];
  
  for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].salario >= 1500) {
        funcionarios[i].salario *= 1.05; 
    } else if (funcionarios[i].salario >= 700) {
        funcionarios[i].salario *= 1.10; 
    } else if (funcionarios[i].salario >= 280) {
        funcionarios[i].salario *= 1.15; 
    } else {
        funcionarios[i].salario *= 1.20; 
    }
  }
  
  console.log(funcionarios);