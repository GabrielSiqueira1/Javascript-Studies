/*
Faça um programa que receba a média de um aluno.
Caso a média seja menor que 5 imprima "Reprovado"
Caso a média seja maior ou igual a 5 e menor que 7 imprima "Recuperação"
Caso a média seja maior ou igual a 7 imprima aprovado.
*/


function exibirAvaliacao (media){
	if(media < 5){
		return "Reprovado";
	} else if(media >= 5 && media < 7){
		return "Recuperação";
	} else {
		return "Aprovado";
	}
}

function calcularSoma(notas){
	let soma = 0;
	for (let i = 0; i < notas.length; i += 1){
		soma += notas[i];
	}
	return soma;
}

function calcularMedia(soma, notas){
	let media = 0;
	media = soma/notas.length;
	return media;
}

const notas = []

notas.push(10);
notas.push(10);
notas.push(10);

console.log(exibirAvaliacao(calcularMedia(calcularSoma(notas), notas)));
