/*Desafio 01
Crie uma classe MathUtils que tenha os seguintes métodos estáticos:
sum(a,b): soma dos números
sub(a,b): subtração dos números
mul(a,b): retorna o produto dos dois números
div(a,b): retorna a divisão dos dois números */

class MathUtils {
  static sum(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
  static mul(a, b) {
    return a * b;
  }
  static div(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.error("Erro: Divisão por zero não é permitida.");
      return undefined;
    }
  }
}

console.log(MathUtils.sum(5, 3));
console.log(MathUtils.sub(5, 3));
console.log(MathUtils.mul(5, 3));
console.log(MathUtils.div(6, 2));
console.log(MathUtils.div(6, 0));

/*Desafio 02
Crie uma classe círculo que tenha os seguintes atributos:
raio: o raio do círculo.
Além disso, crie os seguintes métodos estáticos
calcularArea(raio): retorna a área do círculo
calcularCircurferencia(raio): retorna a circurferencia do circulo */

class Circulo {
  static calcularArea(raio) {
    return Math.PI * Math.pow(raio, 2);
  }
  static calcularCircunferencia(raio) {
    return 2 * Math.PI * raio;
  }
}

const raioDoCirculo = 5;

console.log(Circulo.calcularArea(raioDoCirculo));
console.log(Circulo.calcularCircunferencia(raioDoCirculo));

/*Desafio 03
Crie uma classe chamada Conta que possua os atributos para armazenar o numero da conta, o nome do titular e o saldo. Adicione métodos para realizar depositos e saques.
A classe Conta deve ter os seguintes atributos privados:
numeroConta
numeroTitular
saldo
Esses atributos só podem ser acessados de dentro da classe Conta.
Criar o método privado para validar saldo que verifica se a Conta possui saldo positivo e assim permitir o saque.
No caso de saldo negativo, apresentar a mensagem e não permitir saque.
*/

class Conta {
  #numeroConta;
  #numeroTitular;
  #saldo;

  constructor(numeroConta, numeroTitular, saldo = 0) {
    this.#numeroConta = numeroConta;
    this.#numeroTitular = numeroTitular;
    this.#saldo = saldo;
  }

  #validarSaldo(saque) {
    if (this.#saldo >= saque) {
      return true;
    } else {
      console.log("Saldo insuficiente. Saque não permitido.");
      return false;
    }
  }

  depositar(valor) {
    this.#saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.#saldo}`);
  }

  sacar(valor) {
    if (this.#validarSaldo(valor)) {
      this.#saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.#saldo}`);
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new Conta(123, "Titular A", 1000);

minhaConta.depositar(500);
minhaConta.sacar(700);
minhaConta.sacar(1000);
console.log(minhaConta.getSaldo());

/*Desafio 04
recriar as classes de figuras geometricas utlizando herança e polimorfismo */

class FormasGeometricas {
  calcularArea() {}
}

class Quadrado extends FormasGeometricas {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

class Triangulo extends FormasGeometricas {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

class Circulo extends FormasGeometricas {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }
}

class CalculadoraDeFormas {
  static calcularArea(forma) {
    if (forma instanceof FormasGeometricas) {
      return forma.calcularArea();
    } else {
      throw new Error(
        "Este objeto não é uma instância de Forma, refaça a operação."
      );
    }
  }
}

const quadrado = new Quadrado(5, 5);
const triangulo = new Triangulo(4, 6);
const circulo = new Circulo(3);

console.log(CalculadoraDeFormas.calcularArea(quadrado));
console.log(CalculadoraDeFormas.calcularArea(triangulo));
console.log(CalculadoraDeFormas.calcularArea(circulo));

/*Desafio 05
Crie uma classe Animal que tenha as seguintes propriedades:
nome, idade, espécie
Além disso, crie um método imprimirDados() que imprima no console as informações do animal. Crie também um método emitirSom() que emita o som do animal atráves do console.log().
Crie duas classes derivadas da classe Animal usando herança: Cachorro e Gato
A classe Cachorro deve ter a propriedade Tamanho.
A classe Gato deve ter a propridade cor.
O método emitir sim deve ser sobrescrito e emitir o respectivo som do animal da classe filho.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  imprimirDados() {
    console.log(
      `Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`
    );
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, tamanho) {
    super(nome, idade, "Cachorro");
    this.tamanho = tamanho;
  }
  emitirSom() {
    console.log(`Au Au`);
  }
  imprimirDados() {
    super.imprimirDados();
    console.log(`Tamanho: ${this.tamanho}`);
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade, "Gato");
    this.cor = cor;
  }
  emitirSom() {
    console.log(`Miau`);
  }
  imprimirDados() {
    super.imprimirDados();
    console.log(`Cor: ${this.cor}`);
  }
}

const cachorro1 = new Cachorro("Paçoca", 10, "Médio");
const gato1 = new Gato("Luke", 10, "Branco");

cachorro1.imprimirDados();
cachorro1.emitirSom();
gato1.imprimirDados();
gato1.emitirSom();
