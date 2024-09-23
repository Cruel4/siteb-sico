
class Funcionario {
  constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
  }

  seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
      return `${this.nome} está trabalhando como ${this.cargo}.`;
  }
}


class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
  }

  gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}


class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
      super(nome, idade, 'Desenvolvedor');
      this.linguagem = linguagem;
  }

  programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
  }
}


function exibirErro(mensagem) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<p style="color:red;">Erro: ${mensagem}</p>`;
}

function criarFuncionario() {
  try {
      const nome = document.getElementById('nome').value;
      const idade = parseInt(document.getElementById('idade').value);
      const cargo = document.getElementById('cargo').value;
      const departamento = document.getElementById('departamento').value;
      const linguagem = document.getElementById('linguagem').value;

      if (!nome || !idade || !cargo) {
          throw new Error('Todos os campos obrigatórios devem ser preenchidos.');
      }

      
      if (cargo.toLowerCase() === 'gerente' && linguagem) {
          throw new Error('Somente preencha o campo "Departamento" para Gerente. Remova o valor de "Linguagem de Programação".');
      }

    
      if (cargo.toLowerCase() === 'desenvolvedor' && departamento) {
          throw new Error('Somente preencha o campo "Linguagem de Programação" para Desenvolvedor. Remova o valor de "Departamento".');
      }

      let funcionario;
      let resultado = '';

      if (cargo.toLowerCase() === 'gerente') {
          if (!departamento) {
              throw new Error('O campo "departamento" deve ser preenchido para gerentes.');
          }
          funcionario = new Gerente(nome, idade, departamento);
          resultado += funcionario.seApresentar() + '<br>';
          resultado += funcionario.trabalhar() + '<br>';
          resultado += funcionario.gerenciar();
      } else if (cargo.toLowerCase() === 'desenvolvedor') {
          if (!linguagem) {
              throw new Error('O campo "linguagem de programação" deve ser preenchido para desenvolvedores.');
          }
          funcionario = new Desenvolvedor(nome, idade, linguagem);
          resultado += funcionario.seApresentar() + '<br>';
          resultado += funcionario.trabalhar() + '<br>';
          resultado += funcionario.programar();
      } else {
          throw new Error('Cargo inválido. Deve ser "Gerente" ou "Desenvolvedor".');
      }

      document.getElementById('resultado').innerHTML = resultado;
  } catch (error) {
      exibirErro(error.message);
  }
}
