class Carros{
	marca;
	cor;
	gastoMedioPorKm;
	
	constructor(marca, cor, gastoMedioPorKm){
		this.marca = marca;
		this.cor = cor;
		this.gastoMedioPorKm = gastoMedioPorKm;
	}

	exibirValorPercurso(km, preco){
		return (km/this.gastoMedioPorKm * preco);
	}
}

const teste = new Carros('Fiat', 'Verde', 10);
console.log(teste.exibirValorPercurso(100, 1));
