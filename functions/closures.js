// CLOSURES 
// Uma função que "lembra" do ambiente léxico onde foi criada 

/*  Características: 
    Persistência do Estado: Variáveis do escopo externo são preservadas entre chamadas da closure 

    Encapsulamento: Variáveis do escopo externo são acessíveis apenas pela closure, protegendo-as de acessos 
    externos diretos. 

    Flexibilidade: Closures permitem criar funções reutilizáveis com comportamentos personalizados 
*/

// Situações em que as closures são recomendáveis 

// 1. Criação de funções personalizadas 
/*  Use closures p/ gerar funções com comportamentos diferentes baseados em uma configuração inicial */

function fazMultiplicacao(multiplicador) {
    return function (number) {
        return number * multiplicador
    }
    
}
let triplo = fazMultiplicacao(3)
console.log(fazMultiplicacao(2)(4))
console.log(triplo(6))
console.log('---------------------------------------')

// 2. Criação de contadores ou Estados privados 

function createClickTracer() {
    let clicks = 0

    return function() {
        clicks++
        console.log(`Número de cliques ${clicks}`)
    }
}

const trackClicks = createClickTracer()
trackClicks()
trackClicks()
console.log('---------------------------------------')

// 3. Controle do tempo e assincronismo 

function delayedMessage(message, delay) {
    setTimeout(function() {
        console.log(message)
    }, delay)
}

delayedMessage('AOBA', 1000)

// 4. Memorização (Cache de funções)

function memoize(fn) {
    let cache = {}

    return function(arg) {
        if (cache[arg]) {
            return cache[arg]
        } else {
            result = fn(arg)
            cache[arg] = result
            return result 
        }
    }
}

function square(n) {
    return n * n
}

const memoizedSquare = memoize(square)
console.log(memoizedSquare(5))  // Calcula e armazena 25
console.log(memoizedSquare(5))  // Retorna 25 do cache 