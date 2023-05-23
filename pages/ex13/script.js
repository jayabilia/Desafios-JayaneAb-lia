let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual o produto que você está comprando?')
    let n1 = Number(prompt(`Qual o valor de ${nome}?`))
    let n2 = Number(prompt(`Quanto dinheiro você deu para pagar ${nome}?`))

    let troco = n2 - n1

    window.alert(`Você comprou um(a)${nome} que custou R$ ${n1}. \nDeu R$ ${n2} e vai receber R$ ${troco} de troco \nVolte sempre!!!`)
})