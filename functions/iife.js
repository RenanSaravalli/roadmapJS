// (IIFE) Immediately-Invoked Function Expression Função imediatamente invocada 

/*  É um Design Pattern, contém duas partes principais. A primeira é o escopo da função anônima cujo escopo léxico é encapsulado 
    entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que essas variáveis locais 
    poluam o escopo global. A segunda parte é o (), por meio da qual o interpretador js avaliará e executará a função 
*/

(function () {
    let nome = 'Rafael'
})()
// A variável nome ñ é acessível fora do escopo da expressão 
// nome -> caso eu tente acessar nome gerará um erro -> nome is not defined

/*  Atribuir uma IIFE a uma variável não armazenará a função em si, mas o resultado da função */

let result = (function(nome) {
    return `Eu sou o ${nome}`
})('Cleber')

console.log(result)
// Eu sou o Cleber
