/*  TYPED ARRAYS
    Objs especializados p/ trabalhar diretamente com dados binários brutos. Foram projetados
    para oferecer uma maneira eficiente e estruturada de manipular grandes volumes de dados, especialmente em aplicações 
    de alto desempenho, como gráficos, processamento de áudio, manipulação de streams e operações científicas  
*/

/*  Pq Utlizar?
    1. Desempenho: mais rápidos que os arrays p/ manipular dados numéricos 
    evitam sobrecarga ao armazenar tipos específicos diretamente na memória 
    
    2. Controle de Memória 
    Os dados são armazenados em um buffer contínuo, eliminando o overhead do modelo de arrays 
    dinâmicos 

    3. Trabalhar com APIs binárias: 
    Typed Arrays são usados p/ interpretar dados recebidos de APIs que retornam blobs, 
    como APIs de WebSockets ou File 
*/

/*  Componentes básicos 
    1. ArrayBuffer:
    Representa um bloco de memória bruta fixo e contínuo 
    É a base para criar qualquer Typed Array 

    2. Views 
    Typed Arrays são "visões" de um ArrayBuffer, permitindo manipular os dados em tipos específicos 
    Cada tipo de Typed array define o tamanho e o tipo de dados que será manipulado 
*/

const buffer = new ArrayBuffer(16) // Cria um buffer de 16 bytes 
console.log(buffer.byteLength)     // 16

//  Exemplo Básico 

const buffer2 = new ArrayBuffer(8)          // Cria um buffer de 8 bytes 
const int32View = new Int32Array(buffer)    // Cria uma visão de 32 bytes 

// Armazenando valores 
int32View[0] = 10
int32View[1] = 20

/*  ArrayBuffer em detalhes 
    É o backbone dos typedArrays. Ele aloca um bloco contínuo de memória para armazenamento de dados binários 
    
    suas propriedades e métodos 
    byteLength: retorna o tamanho do buffer em bytes 
    slice(start, end): Cria uma cópia de uma parte do buffer 
*/

// Exemplo 
const buffer3 = new ArrayBuffer(10) // Buffer com 10 bytes 
console.log(buffer3.byteLength)     // 10

const slicedBuffer = buffer3.slice(2, 6)    // Cópia dos Bytes de 2 a 5
console.log(slicedBuffer.byteLength)        // 4

/*  Manipulação Avançada: DataView
    Sendo uma interface que permite manipular um ArrayBuffer com flexibilidade total.
    Ela suporta leitura e escrita em tipos diferentes no mesmo buffer 
*/