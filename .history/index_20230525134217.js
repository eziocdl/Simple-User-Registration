// construindo a classe base do usuario
class newUser{
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

class UserCommon extends CadastroUsuario {
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

class const [state, dispatch] = useReducer(first, second, third)



