// ABSTRACT meio que "força" a classe filha a implementar o metodo

abstract class Personagem {
  constructor(
    public nome: string,
    protected ataque: number,
    private vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    personagem.perderVida(this.ataque);
    this.gritoAtaque();
    {
      console.log(
        `${this.nome} atacou ${personagem.nome} e causou ${this.ataque} de dano!`,
      );
    }
  }

  perderVida(dano: number): void {
    this.vida -= dano;
    console.log(`${this.nome} agora tem ${this.vida} de vida!`);
  }

  abstract gritoAtaque(): void;
}

class Guerreira extends Personagem {
  gritoAtaque(): void {
    console.log(`${this.nome} grita: "Pelos Deuses!"`);
  }
}

class Monstro extends Personagem {
  gritoAtaque(): void {
    console.log(`${this.nome} grita: "MORRAAA!"`);
  }
}

const guerreira = new Guerreira("Xena", 50, 200);
const monstro = new Monstro("Hidra", 30, 150);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
console.log(guerreira);
