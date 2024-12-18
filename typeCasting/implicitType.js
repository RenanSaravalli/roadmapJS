// IMPLICIT TYPE CASTING

// 1. Quando um dos operandos é uma string o js em uma operação o js converte tudo para string

console.log(typeof ("10" + 5)); // string
console.log(typeof ("Hello" + true)); // string
console.log(typeof ("Number: " + 10 + 5)); // string
console.log('--------------------------------------------')

/*  2. Coerção para Num: em operação aritméticas menos com o operador + o JS converte 
    os operandos para Number */

console.log(typeof("10" - 2),("10" - 2));   // number
console.log(typeof("10" / 2),("10" / 2));   // number
console.log(typeof("10" * 2),("10" * 2));   // number
console.log(typeof(true + 2),(true + 2));   // number obs: true == 1 
console.log(typeof(false + 2),(false + 2)); // number obs: false == 0
console.log(typeof("seila" - 2),("seila" - 2)) // Obs: quando o js ñ consegue realizar a operação retorna: number NaN
console.log('--------------------------------------------')

/*  3. Coerção para Boolean: Quando um valor é utilizado em um contexto de true or false (como em condições if, while
    ou operadores lógicos), ele é convertido implicitamente para boolean
*/

if ("") {
    console.log("Isso não vai ser executado")
} 
if ("Hello world") {
    console.log("Isso vai ser executado: Hello World")
}

console.log(!!"Hello World") // True

/*  Explicação:
    Strings não vazias são tratadas como true 
    Strings vazias ("") (0) (null) (undefined) e (NaN) são tratadas como false 
*/
console.log('--------------------------------------------')

/*  Alguns problemas com coerção implícita  */

// 1. Ambiguidade e confusão 
// O comportamento de coersão implícita nem sempre é intuitivo 

console.log(typeof([] + []),[] + []) // isso retorna uma string vazia 
console.log(typeof([] + {}), [] + {}) // isso retorna uma string -> "[object Object]"
console.log('--------------------------------------------')

// 2. O operador == realiza a coerção implícita enquanto o === compara sem alterar os tipos 

console.log("2" == 2)   // true
console.log("2" === 2)  // false
console.log('--------------------------------------------')

/*  Como evitar problemas na coerção implícita  */

// 1. Prefica comparações restritas ( === e !== )

// 2. Converta os valores explicitamente
const valor = '123'
console.log(Number(valor) + 100)    // 223
console.log(Boolean("Hello") === true)

// 3. Testar os valores com typeof 
const x = "123"

if (typeof x === "string") {
    console.log(Number(x))
}

