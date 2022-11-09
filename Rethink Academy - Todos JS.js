//Manipulando Dados - Questão 2
const pessoas = [ 
    { name: "Fabiana Araujo", age:33},
    { name: "Gabriel Gomes", age:25},
    { name: "Fernando Henrique", age:17},
    { name: "Ana Luiza", age:2},
    { name: "Geralda do Nascimento", age:93},
    { name: "Miguel Souza", age:70},
    { name: "Antonio Miguel", age: 69},

];
for (let i=0;i<pessoas.length;i++){
    console.log(pessoas[i])
}
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

// Retornar os nomes das pessoas 

let nomesLista = []
function retornaNomes () { 
    
    for (let i=0;i<pessoas.length;i++){ 
    nomesLista.push(pessoas[i].name)
}
 console.log(nomesLista)
}

retornaNomes()

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

//Media das idades

function mediaDasIdades (){
    let total = 0
    let media
    for (let i=0;i<pessoas.length;i++){ 
        total += pessoas[i].age
    }


    tamanho = pessoas.length
    media = (total / tamanho)
    media = Math.round(media * 100)/100
    
    console.log ("A media das idades é " + media)
}

mediaDasIdades()