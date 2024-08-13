var greeting = document.getElementById('greeting')

function login (){
    var nome = prompt('Digite seu nome: ')
    var matricula = prompt('Digite sua matrícula')
    var idade = prompt('Digite sua idade: ')
    var curso = prompt('Digite seu curso: ')
    //var imgUrl = 'https://pbs.twimg.com/media/EzrIXdcXoAYxN6C.jpg'

    if (nome === '' || nome === null && matricula === '' || matricula === null && idade === '' || idade === null  && curso === '' || curso === null){
        alert('Por favor, digite os dados de forma correta')
    }else{
        greeting.innerHTML = `Bem vindo! ${nome} - Matrícula ${matricula}!`
        /*document.write(`<h2>Informações pessoais - Idade ${idade}</h2>`)
        document.write(`<h2>Você está cursando ${curso}</h2>`)
        document.write(`<img src=${imgUrl} >`)*/

        let logoutBtn = document.createElement('button')
        logoutBtn.innerText = 'Logout'
        logoutBtn.onclick = logout
        greeting.appendChild(logoutBtn(nome))
    }
    
}

function logout(nome) {
    alert('Obrigado por visitar nosso site!')
    greeting.innerHTML = `Até mais..! ${nome}`

}


/*var n1 = parseFloat(prompt('Por favor, digite a nota N1: '))
var n2 = parseFloat(prompt('Por favor, digite a nota N2: '))
var n3 = parseFloat(prompt('Por favor, digite a nota N3: '))
var n4 = parseFloat(prompt('Por favor, digite a nota N4: '))

var media = (n1 + n2 + n3 + n4)/4

console.log('Suas notas foram: | N1 - ' + n1 + ' | N2 - ' + n2 + ' | N3 - ' + n3 + ' | N4 - ' + n4 + ' |' );
console.log('A sua média é ' + media)

document.write('<h1> Olá ' + nome + ' Seja bem vindo ao site! Sua idade é ' + idade + '</h1>')
document.write('<h2>' + 'Suas notas foram: | N1 - ' + n1 + ' | N2 - ' + n2 + ' | N3 - ' + n3 + ' | N4 - ' + n4 + ' |' + '</h2>')
document.write(`<h2> A sua média é ${media}</h2>`)*/

