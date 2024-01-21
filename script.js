
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Animal.prototype.emitirSom = function () {
    console.log("Som genérico de animal");
  };
  
  Animal.prototype.apresentar = function () {
    console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos.`);
  };
  
 
  function Cachorro(nome, idade, raca) {
    const animal = new Animal(nome, idade);
    animal.raca = raca;
    animal.emitirSom = function () {
      console.log("Au au!");
    };
    animal.apresentar = function () {
      console.log(`Eu sou um cachorro chamado ${this.nome}, tenho ${this.idade} anos e sou da raça ${this.raca}.`);
    };
    return animal;
  }
  
  
  function Gato(nome, idade, cor) {
    const animal = new Animal(nome, idade);
    animal.cor = cor;
    animal.emitirSom = function () {
      console.log("Miau!");
    };
    animal.apresentar = function () {
      console.log(`Eu sou um gato chamado ${this.nome}, tenho ${this.idade} anos e sou da cor ${this.cor}.`);
    };
    return animal;
  }
  
  
  const animalGenerico = new Animal("Animal Genérico", 5);
  const cachorro1 = new Cachorro("Rex", 3, "Labrador");
  const gato1 = new Gato("Whiskers", 2, "Branco");
  const cachorro2 = new Cachorro("Fido", 4, "Vira-lata");
  
  
  animalGenerico.apresentar();
  animalGenerico.emitirSom();
  
  cachorro1.apresentar();
  cachorro1.emitirSom();
  
  gato1.apresentar();
  gato1.emitirSom();
  
  cachorro2.apresentar();
  cachorro2.emitirSom();
  