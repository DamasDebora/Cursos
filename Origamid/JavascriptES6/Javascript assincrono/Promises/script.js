/*const promise = new Promise((resolve, reject) => {
    let condition = true
    if(condition){
        setTimeout(() => {
            resolve({nome: 'ana', idade: 25})
        }, 1000);       
    }else{
        reject(Error('Error'))
    }
})

// O Callback de then() só será ativado quando a promise for resolvida
const retorno = promise
.then(resolucao => {
    console.log(resolucao)
    resolucao.profissao = 'Engenheira'
    return resolucao
})
.then(resolucao => {
    console.log(resolucao)
}, rejected => {
    console.log(rejected)
}).finally(() => {
    console.log('fim')
})
console.log(retorno)
*/

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('User logado')
    }, 1700);
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 1500);
})

const allLoaded = Promise.race([login, dados])

allLoaded.then((resolucao) => {
    console.log(resolucao)
})