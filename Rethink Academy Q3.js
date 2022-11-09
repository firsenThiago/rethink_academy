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
//Funçao que retorna dados de uma pessoa passado via parametros - Questão 3

function retornaDados (nome){ 
    let nomes = []
    for (let i=0;i<pessoas.length;i++){ 
    nomes.push(pessoas[i].name)
}
    for (let i=0;i<nomes.length;i++){ 
        if(nomes[i] == nome){
        console.log(pessoas[i])
        }
    }
  
}

retornaDados("Gabriel Gomes")