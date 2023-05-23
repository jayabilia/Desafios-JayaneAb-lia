let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let a = prompt('Insira o valor de A', 0)
    let b = prompt('Insira o valor de B', 0)
    let c = prompt('Insira o valor de C', 0)

    msg.innerHTML = ` \
    A equação atual é <b>${a}x² + ${b}x + ${c}</b> <br> \
    O calculo realizado será Δ = ${b}² - 4 * ${a} * ${c} <br> \
    O valor calculado foi ${b ** 2 - 4 * a * c}
    `

})