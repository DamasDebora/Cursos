//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(1,2)

//funcao com retotno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3))