let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual é o nome do funcionario?')
    let sal = Number(prompt(`Qual é o salario de ${nome}?`))
    let r = Number(prompt(`O salário de ${nome} será reajustado em qual porcentagem?`))

    msg.innerHTML = `<h3>${nome} recebeu um aumento salarial! </h3> <br>\
    O salario atual era R$ ${sal} <br>\
    Com um aumento de ${r}%, o salario vai aumentar em R$ ${sal * (r / 100)} no próximo mês! <br>\
    E partir do mês que vem, ${nome} passará aganhar R$ ${sal * (1 + r / 100)}`
})