/* Operador ternário ou condicional

? se

: se não


*/ 

const rain = false

const umbrela = rain ?'levar guarda chuva' :'deixar guarda chuva'




//preciso transferir dinheiro 

const balance = false

const isNtBlocked = false

const accountExist = false

 const transferOk = balance && isNtBlocked && accountExist ? 'tranferencia realizada' : 'Transferencia negada'

console.log( transferOk)