//Constantes
const pessoas = [ 
    { name: "Fabiana Araujo", age:33},
    { name: "Gabriel Gomes", age:25},
    { name: "Fernando Henrique", age:17},
    { name: "Ana Luiza", age:2},
    { name: "Geralda do Nascimento", age:93},
    { name: "Miguel Souza", age:70},
    { name: "Antonio Miguel", age: 69},

];
// Retornar os nomes das pessoas 

let nomesLista = []
function retornaNomes () { 
    
    for (let i=0;i<pessoas.length;i++){ 
    nomesLista.push(pessoas[i].name)
}
 console.log(nomesLista)
}

retornaNomes()