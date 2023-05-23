let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let p1 = Number(prompt('Qual o preço anterior do produto?'))
    let p2 = Number(prompt('Qual o preço atual do produto?'))
    if (p1 != p2) {

        if (p1 > p2) {

            m1 = 'barato'
            m2 = 'caiu'
            m3 = 'baixo'
            m4 = p1 - p2
            v = (p1 - p2) / p1 * 100
            
        } else if (p2 > p1) {
            
            m1 = 'caro'
            m2 = 'subiu'
            m3 = 'cima'
            m4 = p2 - p1
            v = (p1 - p2) / p1 * -100
            
        }

        msg.innerHTML = `<h3>Analizando os valores informados ...</h3> <br>\
        O produto custava R$ ${p1} e agora custa R$ ${p2} <br> \
        Hoje o produto está mais ${m1} <br>\
        O preço ${m2} R$ ${m4} em relação ao preço anterior <br>\
        Uma variação de ${v}% pra ${m3}`

    }

})