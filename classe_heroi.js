let ataque;

class heroi{
  constructor(nome, idade, tipo){
    this.nome = nome,
    this.idade = idade,
    this.tipo = tipo
  }
  
  
  
  atacar(){
    if(this.tipo=="mago"){
      ataque = "magia";
    }else if(this.tipo=="guerreiro"){
      ataque = "espada"
    }else if(this.tipo=="monge"){
      ataque = "artes marciais"
    }else if(this.tipo=="ninja"){
      ataque = "shuriken"
    }else{
    ataque = "desconhecido"
    }
    
    console.log(`o ${this.tipo} atacou usando o ataque ${ataque}`)
  }
}

let novoHeroi = new heroi("amelie", 22, "mago");
novoHeroi.atacar();