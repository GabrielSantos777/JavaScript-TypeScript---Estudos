class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo Instancia
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    //metodo estatico nao tem acesso ao 'this'
    // Metodo Estatico é usado na classe em si e não tem acesso aos dados da instancia, como por exemplo this.volume
    static trocaPilha(){
        console.log('trocando...');
    }


}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
ControleRemoto.trocaPilha()