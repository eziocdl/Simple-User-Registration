// construindo a classe base do usuario
class CadastroUsuario {
    constructor(nome,sobrenome,login,email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.login = login,
        this.email = email;
      
    }  

    // retornando as informa
    InformacoesUsuario(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Sobrenome: ${this.sobrenome}`);
        console.log(`Login: ${this.login}`)
        console.log(`email: ${this.email}`)
    }
}

// Usuario Comum

class UsuarioComum extends CadastroUsuario {
    constructor(nome,idade,email,endereco) {
        super(nome, email);
        this.idade = idade;
        this.endereco = endereco;
    }
    
    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Endereco: ${this.endereco}`, " ", + `Idade: ${idade}`);
    }
}


