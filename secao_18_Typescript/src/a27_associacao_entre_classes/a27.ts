class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  setFerramenta(ferramenta:Ferramenta){
    this._ferramenta = ferramenta;
  }

  getFerramenta(): Ferramenta | null{
    return this._ferramenta;
  }
  
  getNome(): string{
    return this._nome;
  }

  escrever(): void {
    if(this._ferramenta === null){
      console.log('Não posso escrever sem ferramenta!')
      return;
    }
    this._ferramenta.escrever();
  }

}

abstract class Ferramenta{
  constructor(private _nome: string) {}

  abstract escrever(): void;

  getNome(): string{
    return this._nome
  }
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.getNome()} está escrevendo...`);
  }
}

class MaquinaDeEscrever extends Ferramenta {
  escrever():void {
    console.log(`${this.getNome()} está digitando...`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquina = new MaquinaDeEscrever('Remington');

console.log(escritor.getNome()); // Luiz
escritor.escrever(); // Não posso escrever sem ferramenta!
escritor.setFerramenta(caneta);
escritor.escrever();
escritor.setFerramenta(maquina);
escritor.escrever();
console.log(caneta.getNome());
console.log(maquina.getNome());