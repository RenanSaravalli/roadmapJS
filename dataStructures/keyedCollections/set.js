/*  SET
    Coleção de valores únicos. Permite armazenar valores de qualquer tipo (primitivos ou objetos),
    mas NÃO PERMITE VALORES DUPLICADOS. Em um Set, as chaves são os próprios valores, ou seja,
    ñ há uma associação explícita de chaves e valores como no Map. 

    Características 
    Valores únicos 
    Ordem de inserção preservada 
    Métodos: add(), has(), delete(), clear() p/ manipulação
*/

// Exemplo: 

// Criando um Set 

const set = new Set()

// Adicionando valores 
set.add(1)
set.add(2)
set.add(3)
set.add(2) // Valor duplicado será ignorado
console.log(set)
// Set(3) { 1, 2, 3 }
console.log('--------------------------------')

// Verificando se um valor existe 
console.log(set.has(1))     // true
console.log(set.has(68))    // false
console.log('--------------------------------')

// iterando sobre um Set()

set.forEach(value => console.log(value))

