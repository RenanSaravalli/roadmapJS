/*  MAP
    Cada chave é única dentro do mapa e pode ser de qualquer tipo de dado
    características: 
    ordem de inserção é preservada, os elementos são iterados na ordem que foram inseridos 
    possui métodos como: set(), get(), has(), delete(), e clear() que facilitam a manipulação dos dados
*/
// ex

// Criando um Map

const mapa = new Map()

// Adicionando pares chave-valor

mapa.set("nome", "Julio")
mapa.set(1, "one")
mapa.set(true, "Yes")

// acessando os valores através da chave 

console.log(mapa.get("nome"))   // Julio
console.log(mapa.get(1))        // one
console.log(mapa.get(true))     // yes
console.log('----------------------------------')

// Verificando se uma chave existe 

console.log(mapa.has("nome"))   // true
console.log(mapa.has("age"))    // false
console.log('----------------------------------')

// iterando sobre um map 
mapa.forEach((value, key) => {
    console.log(key, value)
})
console.log('----------------------------------')

// Como é um Map
console.log(mapa)
// Map(3) { 'nome' => 'Julio', 1 => 'one', true => 'Yes' }