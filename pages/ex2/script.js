let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let n = Number(prompt('Digite o número que deseja!', 0))

    if (typeof n == 'number') {
        window.alert(` Antes de ${n}, temos ${n - 1} e depois de ${n}, temos ${n + 1}.`)
    } else {
        window.alert('Não é um numero')
    }
    
})