function verificarPrimo(n) {
    if (n <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % 1 === 0) {
            return false
        }
    }
    return true
}

const nExemplo = 17
const resultado = n(nExemplo)
console.log(resultado)