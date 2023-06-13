function validarSenha(s) {

    var letraMaiuscula = /[A-Z]/.test(s)
    var letraMinuscula = /[a-z]/.test(s)
    var numero = /[0-9]/.test(s)


    if (s.length > 8) {
        return false
    }

    if (s.length < 8) {
        return false
    }

    if (!letraMaiuscula || !letraMinuscula || !numero) {
        return false
    }

    return true
}

var s = "Teste123"

if (validarSenha(s)) {
    console.log("senha valida")
}
else {
    console.log("senha invalida")
}