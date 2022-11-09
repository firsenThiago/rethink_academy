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
for (let i=0;i<pessoas.length;i++){
    console.log(pessoas[i])
}
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