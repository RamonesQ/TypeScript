export class Cliente {
    private nome: string;
    private telefone: number = 0;
    private endereco: object = {};
    private email: string = '';
    private senha: string = '';

    public constructor(nomeCLiente: string) {
        this.nome = nomeCLiente
    }

    public alterarNome(novoNome: string) {
        return this.nome = novoNome;
    }

    public alterarEmail(novoEmail: string) {
        return this.email = novoEmail;
    }

    public cadastro(novoNome: string, novoEmail: string) {
        this.alterarNome(novoNome)
        this.alterarEmail(novoEmail)
    }

    public editarPerfil(novoNome: string, novoEmail: string) {
        this.alterarNome(novoNome)
        this.alterarEmail(novoEmail)
    }

}
