// Alguns operadores que não tenho tanto conhecimento no js 

// Operadores específicos de ES6+

// 1. Spread ( ... )
// Expande um array ou um objeto em elementos individuais 

const arr = [1,2,3]
const newArr = [...arr, 4, 5]
console.log(newArr) // [ 1, 2, 3, 4, 5 ]

const arrObj = [{nome: "car", modelo: "Chevrolet"}]
const loja = [...arrObj, {nome: "R15", marca: "Yamaha"}]
console.log(loja)
// [
//     { nome: 'car', modelo: 'Chevrolet' },
//     { nome: 'R15', marca: 'Yamaha' }
// ]
console.log('---------------------------------------------------')

// 2. Operador Rest( ... )
// Coleta múltiplos valores em um único parâmetro 

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1,2,3,4,5,6,7,8))   // 36
console.log('---------------------------------------------------')

// 3. Operador Nullish Coalescing ( ?? )
// Retorna o operando à direita se o à esquerda fr null ou undefined 

const value = null ?? 'default'
console.log(value) // default
console.log('---------------------------------------------------')

// 4. Operador de Encadeamento Opcional 
// Acessa as propriedades sem causar erro se o valor for null ou undefined 

const obj2 = { nome: 'John' }
console.log(obj2?.age?.value)
// Retorna undefined, caso não tivesse (?) retornaria um erro 