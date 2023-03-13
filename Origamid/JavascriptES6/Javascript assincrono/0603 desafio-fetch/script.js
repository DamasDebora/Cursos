// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputZipCode = document.getElementById('zipCode')
const zipCodeBtn = document.getElementById('zipCodeBtn')
const result = document.querySelector('.result')

zipCodeBtn.addEventListener('click', handleClick)

function handleClick(event){
    event.preventDefault()
    const zipCode = inputZipCode.value
    searchZipCode(zipCode)
}

function searchZipCode(zipCode){
    fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then(response => response.text())
    .then(body => {
        result.innerText = body
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const displayBtc = document.querySelector('.btc')

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(jsonBtc => {
        displayBtc.innerText = ('R$' + jsonBtc.BRL.buy).replace('.', ',')
    })
}

//setInterval(fetchBtc, 500)

fetchBtc()


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima 
const nextJokeBtn = document.querySelector('.next')
const nextJoke = document.querySelector('.joke')

function pullJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then( r => r.json())
    .then(joke =>{
        nextJoke.innerText = joke.value
    })
}

nextJokeBtn.addEventListener('click', pullJoke)
pullJoke()