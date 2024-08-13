function calcula(params) {
    let altura = Number(prompt("Digite sua altura em centimetros: "))
    let peso = Number(prompt("Digite seu peso: "))
    let IMC = Number
    
    if (altura < 0 || peso < 0) {
        alert('Peso ou Altura invalidos')
    }
    else{
        altura = altura/100
        IMC = peso / (altura * altura)

        if (IMC < 16) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em BAIXO PESO GRAU 1</p>`)
        }
        else if (IMC >= 16 && IMC <= 16.99) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em BAIXO PESO GRAU 2</p>`)            
        }
        else if (IMC >= 17 && IMC <= 18.49) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em BAIXO PESO GRAU 3</p>`)            
        }
        else if (IMC >= 18.50 && IMC <= 24.99) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está com PESO ADEQUADO</p>`)            
        }
        else if (IMC >= 25 && IMC <= 29.99) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em SOBREPESO</p>`)            
        }
        else if (IMC >= 30 && IMC <= 34.99) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em OBESIDADE GRAU 1</p>`)            
        }
        else if (IMC >= 35 && IMC <= 39.99) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em OBESIDADE GRAU 2</p>`)            
        }
        else if (IMC > 40) {
            document.write(`<p>O IMC do usuário é igual a ${IMC.toFixed(2)} e está em OBESIDADE GRAU 3</p>`)
        }
        else {
            document.write(`<p>IMC INVALIDO</p>`)
        }

    }
}

//Programa 1 - Crie um programa que calcula o IMC do usuário
//Programa 2 - Crie uma função que lê uma temperatura passada pelo usuário para que seja feita a conversão
//Programa 3 - Programa que gere X números de loteria para o usuário, sendo X o número que o usuário desejar