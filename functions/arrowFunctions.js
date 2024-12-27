/*  ARROW FUNCTIONS
    Possui a sintaxe mais curta e não possui seu próprio this, arguments, super ou new.target.
    Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como 
    construtores
*/

// Sintaxe Básica 
/*  (param1, param2, ..., paramN) => { statements }
    (param1, param2, ..., paramN) => expression   
*/

// Sintaxe Avançada 
/*  Envolva o corpo da função em parênteses para retornar uma expressão literal
    de objeto:
    params => ({foo: bar})

    Parâmetros rest e parâmetros padrões são suportados 
    (param1, param2, ...rest) => { statements }
    (param1 = defaultValue, param2 = defaultValue) => { statements }

    Desestruturação (destructuring) dentro da lista de parâmetros também é suportado 
    let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c
    f()
*/

// Dois fatores influenciaram a introdução dessas funções => funções mais curtas e a inexistência da pala