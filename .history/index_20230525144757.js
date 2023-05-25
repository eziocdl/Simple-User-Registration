// Construindo a classe base do usuário
class User {
  constructor(nome, sobrenome, login, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.login = login;
    this.email = email;
  }

  // Retornando as informações do usuário
  informationUser() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Sobrenome: ${this.sobrenome}`);
    console.log(`Login: ${this.login}`);
    console.log(`Email: ${this.email}`);
  }
}

// Classe UserCommon que herda da classe User
class UserCommon extends User {
  constructor(nome, sobrenome, login, email, idade, endereco) {
    super(nome, sobrenome, login, email);
    this.idade = idade;
    this.endereco = endereco;
  }

  displayInformation() {
    super.informationUser();
    console.log(`Idade: ${this.idade}`);
    console.log(`Endereço: ${this.endereco}`);
  }
}

// Classe UserAdmin que herda da classe User
class UserAdmin extends User {
  constructor(nome, sobrenome, login, email, endereco, cargo) {
    super(nome, sobrenome, login, email);
    this.endereco = endereco;
    this.cargo = cargo;
  }

  displayInformation() {
    super.informationUser();
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Cargo: ${this.cargo}`);
  }
}

// Classe UserRegistration
class UserRegistration {
  constructor() {
    this.usuarios = [];
  }

  addUser(usuario) {
    this.usuarios.push(usuario);
  }

  showAllUsers() {
    this.usuarios.forEach((usuario) => {
      usuario.displayInformation();
      console.log("----------------------");
    });
  }
}

// Criando as instâncias de usuário
const usuario1 = new UserCommon("Ezio", "Auditore", "ezio", "ezio@example.com", 37, "Rua 34 de Agosto");
const usuario2 = new UserAdmin("Thais", "Silva", "thais", "thais@example.com", "Admin");

// Instância de cadastro de usuários
const userRegistration = new UserRegistration();

// Adicionar usuários ao cadastro
userRegistration.addUser(usuario1);
userRegistration.addUser(usuario2);

// Exibir todos os usuários cadastrados
userRegistration.showAllUsers();