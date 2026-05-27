// AGREGAÇÃO É QUANDO UMA CLASSE TEM UM ATRIBUTO DE OUTRA CLASSE, MAS ESSA OUTRA CLASSE NÃO DEPENDE DA PRIMEIRA PARA EXISTIR

class CarrinhoCompras{
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]){
    for (const produto of produtos){
      this.produtos.push(produto);
    }
  }

  qtdProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto._preco, 0);
  }
}

class Produto {
  constructor(public _nome: string, public _preco: number) {}
}

const carrinhoCompras = new CarrinhoCompras();
const produto1 = new Produto('Camiseta', 29.90);
carrinhoCompras.inserirProdutos(produto1);
console.log(carrinhoCompras.qtdProdutos()); // 1
console.log(carrinhoCompras.valorTotal()); // 29.90