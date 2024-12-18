/*  Normalmente utilizado com manipulação de dados de entrada 
    inputs de formulários HTML, por exemplo, são sempre tratados como strings. É comum convertê-los 
    explicitamente para números 
*/

// Para converter um valor para string podemos usar o String(valor) e valor.toString()

const num = 69
const bool = true

console.log(String(num))
console.log(bool.toString())

// OBS: toString() não funciona em null ou undefined
console.log('--------------------------------------------------------------')

// Convertendo para Número 

// métodos: 
// Number(valor) 
// parseInt(valor, base) -> Converte para números inteiros, com suporte para sistemas numéricos específicos (binário, octal, decimal, hexadecimal)
// parseFloat(valor) -> Para números de ponto flutuante 

const str = "123"

console.log(Number(str))                // 123
console.log(parseInt("123.69", 10))     // 123
console.log(parseFloat(str))            // 123
console.log(Number(bool))               // 1
console.log(Number("ABC"))              // NaN

console.log('--------------------------------------------------------------')

// 3. Convertendo para Boolean
// método: Boolean()

console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false

console.log('--------------------------------------------------------------')

// 4. Convertendo para Objeto 

// Converte valores primitivos (número, string, boolean) para objetos correspondentes 
// Métodos:
// Object(valor) -> Converte para objeto 
// Instanciar com construtores new Number(valor) ou new String(valor)
// Ex

const str2 = 'AIIII'

const objNum = Object(num)
const objStr = new String(str2)

console.log(objNum)
console.log(objStr)