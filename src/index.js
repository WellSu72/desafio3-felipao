class Heroi{
    constructor(name,age,type){
        this.name = name,
        this.age = age,
        this.type = type
    }
    attack(){
        let attacking = ["magia","espada","artes marciais","shuriken"]
        let msg = "";
        
        switch(this.type){
            case "mago" : msg = attacking[0]; break;
            case "guerreiro" : msg = attacking[1]; break; 
            case "monge" : msg = attacking[2]; break;
            case "ninja" : msg = attacking[3]; break;
        }
        console.log(`o ${this.type} atacou usando ${msg}`)
    }
}

let nome = "Wellington";
let idade = 51;
let tipo = "monge";


function existeHeroi(vTipo){
   let typeHeroi = ["guerreiro","mago","monge","ninja"];
   let encontrouTipo = false;
   for(let i = 0; i < typeHeroi.length; i++){
      if (vTipo === typeHeroi[i]){
        encontrouTipo = true;
        break;
      } 
    } 
    return encontrouTipo;  
}

if (existeHeroi(tipo)){
    let heroi = new Heroi(nome,idade,tipo);
    heroi.attack();
} else{
  console.log("Tipo de heroi não identificado!")
}


