const testeimparpar = (n) => {
    let calculoteste = n % 2

    if (calculoteste == 1) {
        return "número ímpar"
    } else {
        return "número par"
    }
}

console.log(testeimparpar(17))
console.log(testeimparpar(64))
console.log(testeimparpar(1500))