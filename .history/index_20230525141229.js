// construindo a classe base do usuario
class User{
    constructor(nome,sobrenome,login,email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.login = login,
        this.email = email;
      
    }  

    // retornando as informa
    InformationUser(){
        console.log(`Nome: ${this.name}`);
        console.log(`Sobrenome: ${this.sobrenome}`);
        console.log(`Login: ${this.login}`)
        console.log(`email: ${this.email}`)
    }
}

// Usuario Comum

class UserCommon extends User {
    constructor(nome,idade,email,endereco) {
        super(nome, email);
        this.idade = idade;
        this.endereco = endereco;
    }
    
    displayInformation() {
        super.displayInformation();
        console.log(`Endereco: ${this.endereco} + " ", + Idade: ${idade}`);
    }
}

// classe admin

class UserAdmin extends User {
    constructor(nome,idade,email,endereco,cargo) {
        super(nome,idade,endereco, email);
        this.cargo = cargo;
    }

    displayInformation() {
        super.displayInformation();
        console.log(`Cargo: ${this.cargo}`);
    }
}

// classe cadastro de usuarios

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





