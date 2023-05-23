let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual é o seu nome?',)
    let idade = prompt(`Olá ${nome}, Qual sua idade?`,)
    window.alert(`Acabo de conhecer ${nome} que tem ${idade} anos de idade!!!`)
})