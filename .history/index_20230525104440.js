// construindo a classe base do usuario
class CadastroUsuario {
    constructor(nome,sobrenome,login,email,cargo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.login = login,
        this.email = email,
        this.cargo = cargo
    }  

    // retornando as informa
    exibirInformacoes(){
        return `Nome: ${this.nome} - Sobrenome: ${this.sobrenome} - Login: ${this.login} - Email: ${this.email} - Cargo: ${this.cargo}`;
    }

}