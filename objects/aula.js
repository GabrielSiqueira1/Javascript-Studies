const pessoa = {
	nome: 'Gabriel Siqueira',
	idade: 23,
	
	descrever: function(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
	}
}

const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'Teste';
pessoa.nome = 'Teste';

// Instâncias
class Teste {
	nome;
	idade;
	
	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}

	descrever(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
	}
}

const gabriel = new Teste();
gabriel.nome = 'Gabriel Siqueira';
gabriel.idade = 23;

console.log(gabriel);
