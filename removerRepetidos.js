function removerRepetidos(m) {

    const listaPlana = m.flat()
    const conjunto = new Set(listaPlana)

    const novaM = [conjunto]
    return novaM
}

const exemplo = [[1, 2, 3, 3, 3, 2, 2, 1]];
const resultado = removerRepetidos(exemplo)

console.log(resultado)