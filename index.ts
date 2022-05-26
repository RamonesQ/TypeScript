

function login(identification: number | string, password: string): boolean {
    const identificationMock: string = 'alo@gama.com';
    const passwordMock: string = 'aloSenha1'

    if (identification === identificationMock && password == passwordMock) {
        return true
    }
    return false
}


const produtos: [string, number, number, number?] = [
    'Geladeira',
    387200000,
    300.00
]

type Products = [string, number, number, number?]

function listProducts(lista:Products){
    
}
