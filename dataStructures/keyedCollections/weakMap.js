/*  WEAKMAP
    Semelhante ao Map, porém com um comportamento específico em relação à gestão de memória
    e referências fracas. Projetado para associar valores a objetos de maneira que a memória 
    utilizada pelas chaves seja automaticamente liberada quando ñ houver mais referências p/ o obj chave 
    opção útil para associar dados a objetos sem bloquear a coleta de lixo

    Características:
    Chaves apenas de objetos 
    Referências fracas 
    Não iterável 
*/

// Exemplos de uso 

const weakMap = new WeakMap()

const obj1 = {name: "Object 1"}
const obj2 = {name: "Object 2"}

// Adicionando pares chave-valor ao WeakMap

weakMap.set(obj1, "Valor associado ao obj 1") 
weakMap.set(obj2, "Valor associado ao obj 2") 
// Acessando os valores utilizando as chaves 

console.log(weakMap.get(obj1)) // Valor associado ao obj 1
console.log(weakMap.get(obj2)) // Valor associado ao obj 2

// Removendo uma chave e verificando se ela existe 
weakMap.delete(obj1)
console.log(weakMap.has(obj1)) // false 

// Se não houver mais referência para obj2, o WeakMap pode coletar o par chave-valor

// Como o weakMap facilita a gestão de memória 

// Sendo útil em cenários onde vc está associando dados a obj temporários ou internos 
// e não quer que esses dados impeçam a coleta de lixo do obj quando não for mais necessário 

// Exemplo de coleta de lixo automática 

const weakMap2 = new WeakMap()

function ceateObject() {
    const objj = {name: "Temporário"}
    weakMap.set(objj, "Dados privados")
    return objj
}

// Criamos um objeto e armazena dados privados no weakMap
const tempObj = ceateObject()

// quando tempObj não é mais utilizado, ele pode ser coletado pelo garbage collector
tempObj = null

// Nesse ponto, o par chave-valor será removido automaticamente do WeakMap