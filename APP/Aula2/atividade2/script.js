function calculaTemperatura(params) {
    let tipo1 = Number(prompt(`Digite o tipo da temperatura que será inserida: `))
    let tipo2 = Number(prompt(`Digite para qual tipo a temperatura será convertida: `))
    let temperatura = Number(prompt(`Digite a temperatura que deseja ser convertida: `))

    if (tipo1 === tipo2) {
        alert('Os tipos não podem ser iguais')
    }else{
        switch (tipo2) {
            case 1:
                converteF(tipo1, temperatura)
                break;
            case 2:
                converteC(tipo1, temperatura)
                break;
            case 3:
                converteK(tipo1, temperatura)
            break;
    }
}


}

function converteF(tipo, temperatura) {
    let resultado = Number

    switch (tipo) {
        case 2:
            resultado = (temperatura - 32) / 1.8
            document.write(`A temperatura convertida é ${resultado} C°`)
            break;
        case 3:

            break;
        default:
            break;
    }
}

function converteC(tipo, temperatura) {
    let resultado = Number
    switch (tipo) {
        case 1:
            resultado = (temperatura*1.8)+32
            document.write(`A temperatura convertida é ${resultado} F°`)
            break;
        case 3:
            
            break;
        default:
            break;
    }
}

function converteK(tipo, temperatura) {
    let resultado = Number
    switch (tipo) {
        case 1:
            resultado = ((temperatura - 32)/1.8)+273.15
            document.write(`A temperatura convertida é ${resultado} F°`)
            break;
        case 2:
            
            break;
        default:
            break;
    }
}


//Programa 2 - Crie uma função que lê uma temperatura passada pelo usuário para que seja feita a conversão
//Programa 3 - Programa que gere X números de loteria para o usuário, sendo X o número que o usuário desejar