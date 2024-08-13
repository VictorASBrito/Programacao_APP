//var lista = ['Victor', 'Thaius', 'Jota', 'Matias']
//push()
//unshift()
//pop()
//shift()
//join()
//toString


//var homem = ['homem1', 'homem2', 'homem3', 'homem4']
//var mulher = ['mulher1', 'mulher2', 'mulher3', 'mulher4']

//var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//var i = 0

//while (i < month.length) {
//    document.write(`<p>${month[i]}</p>`)
//    i++
//

function escolher() {
    let options = Number(prompt('Digite a opção desejada: '))
    switch (options) {
        case 1:
            alert(`Você escolheu Arroz`)
            break;
        case 2:
            alert(`Você escolheu Feijão`)
            break;
        case 3:
            alert(`Você escolheu Batata Frita`)
            break;
        case 4:
            alert(`Você escolheu Frango`)
            break;
        default:
            alert(`Você escolheu uma opção invalida`)
            break;
    }
}

//Programa 1 - Crie um programa que calcula o IMC do usuário
//Programa 2 - Crie uma função que lê uma temperatura passada pelo usuário para que seja feita a conversão
//Programa 3 - Programa que gere X números de loteria para o usuário, sendo X o número que o usuário desejar