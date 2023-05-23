let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let d = Number(prompt('Quantos R$ você tem na carteira?'))

    msg.innerHTML = `Você tem ${d / 5} dolares! <br> 1 dolar = 5 reais`

})