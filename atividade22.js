const rsc = require("readline-sync")
let dataAtual = ('19/02/2022');
let dataEvento = ('12/03/2022');
let qtdevagas = 100


if (dataEvento > dataAtual) {
    console.log("Data do evento foi excedida. Cadastro não permitido");
}else {
    console.log("Preencha os requisitos para finalizar o cadastro");
}   

let idade = rsc.questionInt("Digite sua idade: ")

if (idade < 18 || qtdevagas > 100){
    console.log("Inscrição não pode ser realizada. Idade não permitida ou vagas excedidas");
}else {
    console.log("Inscrição pode ser realizada.");
    rsc.question("Digite seu nome: ");
    rsc.questionInt("Numero do RG ou CPF: ");
    console.log("Incrição realizada.");
    console.log("Lista de participantes: Luiz,Ana,Bruna...");
    console.log("lista de palestrantes: Gabriel,Junior")
}



