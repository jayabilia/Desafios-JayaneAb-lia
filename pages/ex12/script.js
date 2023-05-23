let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual é o nome do aluno')
    let n1 = Number(prompt(`Qual é a primeira nota de ${nome}`))
    let n2 = Number(prompt(`Qual é a segunda nota de ${nome}`))
    let media = (n1 + n2) / 2

    msg.innerHTML = `<h1>Analisando a situação de ${nome} ...</h1> <br>\
    Com notas ${n1} e ${n2}, a media é de ${media} <br>`

    if (media < 3) {
        msg.innerHTML += "Com média abaixo de 5.0, o aluno está REPROVADO"
    } else if (media >= 3 && media < 6) {
        msg.innerHTML += "Com média entre 5.0 e 6.0, o aluno está de RECUPERAÇÃO"
    } else if (media >= 6) {
        msg.innerHTML += "Com média acima de 6.0, o aluno está APROVADO"
    }

})