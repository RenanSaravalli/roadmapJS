// Exemplo completo de JSON
let json
json = {
    "empresa": {
        "nome": "TechCorp",
        "fundacao": 2005,
        "ativos": true,
        "funcionarios": [
            {"nome": "Ana", "cargo": "Desenvolvedora", "idade": 38},
            {"nome": "Cleber", "cargo": "Gerente", "idade": 50},
            {"nome": "Robson", "cargo": "Designer", "idade": 18}
        ]
    }
}

// Funções importantes 

// 1. JSON.stringify() -> Converte um obj JS para uma string JSON

const obj = {nome: "Khalifa", idade: 32}
const jsonString = JSON.stringify(obj)

console.log(jsonString) //  '{"nome":"Khalifa","idade":32}'

// 2. JSON.parse() -> Converte uma string JSON para um obj Js
const json2 = '{"nome": "Khalifa", "idade": 32}'
const obj2 = JSON.parse(json2)
console.log(obj2) // { nome: 'Khalifa', idade: 32 }

// Usos do JSON 

// 1. APIs
// Json é o formato mais utilizado para trocar dados entre cliente e servidor 

fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
    .then(response => response.json())
    .then(data => console.log(data))

// 2 Configurações -> utilizado em arquivos de configurações como packege.json

// 3. Armazenamento local: -> Usados para simular dados durante o desenvolvimento


// Uma matriz tb é válida como JSON