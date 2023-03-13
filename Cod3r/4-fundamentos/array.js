const valores =  [ 9, 7, 2, 1, 1.2]
console.log(valores[0], valores[4])


valores[5] = 10 
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)