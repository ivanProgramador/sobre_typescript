"use strict";
/*
O Ts tem uma regra de tipagem dinamica para variaveis  porém
depois de atraibuir ela assume um tipo e eesse não pode ser editado depois
por exemplo

No caso abaixo quando ela recebe uma string o tipo da variuvel passa a ser
string e ela não vaio aceitar um numero pore conta disso porque o tipo fica
implicito com base no conteudo que foi atribuido a ela anteriormente.

let nome ='joão';

nome=28

atribuindo tipos de forma explicita isso pode feito dessa forma

let minhaIdade: number
minhaIdade=27

dessa forma se eu quiser adicionar letras

const minhaIdade:any
minhaIdade = "idade 27"
*/
/*
Tipo array
*/
/*
Nesse caso a diretiva any significa que esse array pode  receber qualquer coisa
*/
/*
let hobbies:any[]= ['cozinhar','praticar esportes'];

console.log(hobbies[0]); // aqui ele vai retornar o primeiro indice

console.log(typeof hobbies); //aqui eletenta identificar a que tipo pertence os hobies então ele vai dizer que é um objeto
*/
/*
 Tuplas ts
   A regra é 1 string e um numero por exemplo um endereço
   como eu ja defini que quero um string e um numero
   se outro tipo de dado entrar eu vou ter um problema
      
*/
let endereco = ["Av principal", 99, "bloco A"];
console.log(endereco);
/*
 enums
   Trata-se de um tipo de objeto nativo que armazena valores fixos
   se em uma aplicação tiver possibilidades fixas para um processo
   por exemplo dias da semana , meses do ano eses dado podem ser definidos
   dentro de um enum, depois e so chamar ele e apontar apar o valor fixo
   pre-definido
*/
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; //posição 3
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
/*
Any
 Variveis do tipo any aceitam qualquer dado porque ela tem tipagem dinamica
 isso é conveniente porém gera um certa insegurança em relação aos registros
 isso possibilita que um cliente digite numeros ao inves de texto, fazendo
 com que a organxação dos dados recebeida seja comprometida, dependendo do
 contexto.

*/
