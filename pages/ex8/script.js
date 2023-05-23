let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    n = prompt('Qual é o produto que você está comprando?')
    p = Number(prompt(`Qual é o valor de ${n}?`))

    msg.innerHTML = `<h3>Calculando desconto para ${n} ...</h3> <br>\
    O preço original era R$ ${p} <br>\
    Você acaba de ganhar R$ ${p * 0.1} de desconto <br>\
    No fim, você vai pagar R$ ${p * 0.9}`

})