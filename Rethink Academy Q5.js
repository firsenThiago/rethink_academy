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
//Funçao que adiciona id

function adicionarId (){ 
    let id = 1
    for (let i=0;i<pessoas.length;i++){ 
        pessoas[i]["id"] = id 
        id += 1
    }
    console.log(pessoas)
}

adicionarId()