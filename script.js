class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    
    switch(this.tipo) {
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'mago':
        ataque = 'magia';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

const bruto = new heroi('Bruto', 40, 'guerreiro');

bruto.atacar();

const faisca = new heroi('Faisca', 50, 'mago');

faisca.atacar();

const li = new heroi('Li', 55, 'monge');

li.atacar();

const nuvem = new heroi('Nuvem', 30, 'ninja');

nuvem.atacar();
