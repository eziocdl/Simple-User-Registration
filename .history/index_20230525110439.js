// construindo a classe base do usuario
class CadastroUsuario {
    constructor(nome,sobrenome,login,email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.login = login,
        this.email = email
      
    }  

    // retornando as informa
    InformacoesUsuario(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Sobrenome: ${this.sobrenome}`);
        console.log(`Login: ${this.login}`)
        console.log(`email: ${this.email}`)
    }
}

// classe usuário administrador herdando a classe usuario

class UsuarioAdministrador extends CadastroUsuario {
    constructor(nome,sobrenome,login,email,cargo,senha){
        super(nome,sobrenome,login,email)

        this.cargo = cargo;
        this.senha = senha;
    }

    // exibir informações do administrador
exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Cargo: ${this.cargo}`);
  }
}



