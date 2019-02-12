console.log("Hello World");

// Não existe valor para o prompt, por isso o valor da resposta está sendo convertido para numérico
// let nota = Number(prompt("Qual a nota do aluno ?"));

// console.log(nota);

// alert("A nota do aluno é: " + nota);
// Mesma maneira de mostrar os dados, mas escrito de uma maneira mais simples
// alert(`A nota do aluno é ${nota}.`); 

// Maneira de transformar a reposta do prompt em TAD numérico
// if (Number(nota) > 6){
// if (nota >= 6) {
//     console.log('Parabéns, o aluno foi aprovado');
// }
// else if(nota >= 5.5){
//     console.log('Parabéns, você foi aprovado, agradeça ao sistema.');
// }
// else {
//     console.log('Parece que a sua nota foi insuficiente, converse com a coordenação');
// }

// let contador = 0;

// while(isNaN(nota)){
//     nota = Number(prompt("Qual a nota do aluno ?"));
//     // console.log(contador);
//     // contador = contador + 1;
//     // contador ++;   //Mesma maneira de printar 
//     // contador =+1;    //Mesma maneira de printar 
// }
// alert(`A nota do aluno é ${nota}.`); 

let valores = [15, 2, -10, 227, 458, 300, 403];
// Ler os valores do vetor
for(let valor of valores){
    if (valor % 2 === 0){
        console.log(valor + " PAR");
    } else{
        console.log(valor + " IMPAR");
    }
}

let Joaozinho = {
nome: "João",
sobrenome: "da Silva",
idade: 17,
namorada: undefined,
cachorros:[
    {
        nome: "Rex",
        raca: "Tomba-potes"
    },
    {
        nome: "Mila",
        raca: "Tomba-latas"
    }
]
};

let Mariazinha = {
    nome: "Maria",
    sobrenome: "Consuelo",
    idade: 22,
    namorada: undefined
};

/* O usuário vai definir qual o tamanho da escada que ele gostaria.
Você tem que desenhar a escada no console de acordo com esse tamanho.
Exemplo 
USUÁRIO: 5 lances
SAÍDA:
#
##
###
####
#####

BÊNUS
O usuário escolhe o material da escada, Exemplo:
USUÁRIO: 5 LANCES
MATERIAL: @
@
@@
@@@
@@@@
@@@@@
*/