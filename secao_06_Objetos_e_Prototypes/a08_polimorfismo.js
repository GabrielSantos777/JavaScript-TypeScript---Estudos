// POLIMORFISMO

// O polimorfismo é um conceito fundamental na programação orientada a objetos que permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Isso é possível porque as classes podem compartilhar uma interface ou herdar de uma classe base, permitindo que métodos sejam chamados em objetos de diferentes tipos sem se preocupar com a implementação específica de cada classe.

// Superclasse ou classe base
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
}

Conta.prototype.sacar = function(valor){
    if(this.saldo >= valor){
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else{
        this.exibirSaldo();
        return;
    }
}

Conta.prototype.exibirSaldo = function(){
    console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(1001, 12345, 500);
conta1.depositar(200);
conta1.sacar(100);
conta1.exibirSaldo();

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(this.saldo + this.limite >= valor){
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
}

const contaCorrente1 = new ContaCorrente(1002, 54321, 300, 200);
contaCorrente1.depositar(300);
contaCorrente1.sacar(650);
contaCorrente1.exibirSaldo();

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
    if(this.saldo >= valor){
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else{
        this.exibirSaldo();
        console.log(`Não foi possível realizar o saque de R$${valor}.`);
        return;
    }
}

const contaPoupanca1 = new ContaPoupanca(1003, 67890, 1000);
contaPoupanca1.depositar(500);
contaPoupanca1.sacar(1600);
contaPoupanca1.exibirSaldo();