let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    n = Number(prompt('Digite uma distância em metros (m)', 0))

    if (typeof n == 'number') {
        msg.innerHTML = `<h1> A distancia de ${n} em metros corresponde a... </h1> <br>\
        ${n / 1000} quilômetros <br>\
        ${n / 100} hectômetros <br>\
        ${n / 10} decâmetros <br>\
        ${n * 10} decimetros <br>\
        ${n * 100} centimetros <br>\
        ${n * 1000} milimetros <br>`
    } else {
        window.alert('Não é um número!')
    }
    
})