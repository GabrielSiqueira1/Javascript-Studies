/*
 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior número par e o menor número ímpar.
 */

const gets = require('./fa-ex2');

const n = gets();

function analisar(par, impar){
	for(let k = 0; k < par.length; k++){
		if(maior_par <= par[k]){
			maior_par = par[k];
		}
	}
	for(let j = 0; j < impar.length; j++){
		if(menor_impar >= impar[j]){
			menor_impar = impar[j];
		}
	}
	return {maior_par, menor_impar};
} 

let par = [];
let impar = [];

for (let a = 0; a < n; a += 1){
	
	let insert = gets();
	let teste = insert % 2;

	if(teste === 1){
		impar.push(insert);
	} 
	if(teste === 0){
		par.push(insert);
	}
}

let maior_par = par[0];
let menor_impar = impar[0];
console.log(analisar(par, impar));

