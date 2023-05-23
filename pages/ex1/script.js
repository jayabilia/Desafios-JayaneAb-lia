let bt = document.getElementById('bt')
let msg = document.getElementById('msg')
let final

bt.addEventListener('click', (event) => {
    event.preventDefault()
    ano = prompt('Qual é o ano que você deseja verificar?', '')

    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                final = `É bissexto`
                msg.classList = 'yes'
            } else {
                final = `Não é bissexto`
                msg.classList = 'no'
            }
        } else {
            final = `Analisando o ano... É bissexto`
            msg.classList = 'yes'
        }
    } else {
        final = `Analisando o ano ... Não é bissexto`
        msg.classList = 'no'
    }

    msg.innerHTML = `${ano} <b>${final}</b>`

})