"use strict";
function login(identification, password) {
    const identificationMock = 'alo@gama.com';
    const passwordMock = 'aloSenha1';
    if (identification === identificationMock && password == passwordMock) {
        return true;
    }
    return false;
}
let produtos;
