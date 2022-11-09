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
//Idade para dirigir 

function habilitadosADirigir (){ 
    console.log ("Pessoas que tem idade para tirar habilitação: ")
    for (let i=0;i<pessoas.length;i++){ 
        if(pessoas[i].age>17){ 
            console.log(pessoas[i])
        }
    }
}

habilitadosADirigir ()