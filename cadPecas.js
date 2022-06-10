// •	Se a peça possuir um peso superior a 100gramas, pode cadastrar.
// •	Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
// •	Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.
 

let peso = 50;
let qtdPecas = 10;
let nomePeca = "pc";

if( peso >= 100){
    console.log("Peça pode ser cadastrada");
}   else    {
    console.log("Peso Insuficiente");
}

if(qtdPecas >= 10){
    console.log("Não há capacidade disponível na caixa");
}
if(nomePeca.length < 3){
    console.log("O nome da peça deve ter mais do que 3 caracteres");
}