let curso = {
    modalidade: [{ead: true}, {presencial: true}, {hibrido: false}]
}
console.log(curso.modalidade.find((item) => item === ead))