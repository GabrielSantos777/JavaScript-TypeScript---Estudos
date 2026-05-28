// Associação é a relação mais fraca entre classes
// Agregação é a relação mais fraca entre classes, onde uma classe utiliza outra classe
// Composição é a relação mais forte entre classes, onde uma classe é parte de outra classe

class Carro {
  private readonly motor = new Motor();

  ligar() {
    this.motor.ligar();
  }

  acelerar(){
    this.motor.acelerar();
  }
  parar(){
    this.motor.parar();
  }

}

class Motor {
  ligar():void {
    console.log('Motor ligado');
  }
  acelerar():void {
    console.log('Motor acelerando');
  }
  parar():void {
    console.log('Motor parou');
  }
  desligar():void{
    console.log('Motor desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
// Carro tem um motor, mas se o carro for apagado, o motor também será apagado
