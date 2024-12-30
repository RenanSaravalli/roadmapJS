// Functions em JS 

/*  Quando valores primitivos são passados no parâmetro da função e a função altera 
    o valor do parâmetro, esta mudança ñ reflete globalmente ou na chamada da função 

    mas 

    Quando é passo um valor não primitivo por exemplo (um objeto ou array) e a função
    alterar as propriedades do obj, essa mudança é visível fora da função.
*/

function minhaFuncao(obj, array) {
    obj.make = 'Toyota'
    array[0] = 69
}

const meuCarro = { make: 'Honda', model: 'Accord', year: 1998 }
const meuArray = [0,1,2]
let x,y,a,b

x = meuCarro.make // Recebe o valor Honda

a = meuArray[0]

minhaFuncao(meuCarro,meuArray)

y = meuCarro.make // y Recebe o valor "Toyota"
// A propriedade make foi alterada pela função 

b = meuArray[0]

console.log(`x = ${x} | y = ${y}`)
// x = Honda | y = Toyota

console.log(`a = ${a} | b = ${b}`)
// a = 0 | b = 69 -> o mesmo acontece pros arrays 
console.log('-------------------------------------')

// Função que se chama para calcular fatorial 
function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * fatorial(n - 1)
}
console.log(fatorial(5)) // 120 