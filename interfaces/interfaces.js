"use strict";
/*
Uma interface funciona como um tipo de contrato e para que possa usar ela
as regras dessa interface devem ser seguidas eu vou criar uma interface
chamada Humano essa interface tem um atributo nome ele deve ser sempre
preenchido com string

No caso eu tenho um segundo atributo  chamado idade ele tem um ponto de interrogação
porque ele é opcional o usuario pode esclher preencher ele ou não.

No caso do terceiro atributo eu espero algo aleatório sei que pode vir um terceiro dado
porém eu não sei oque é então eu crio um atributo do tipo string e digo que
ele pode receber dados de tipo generico any.

O quarto atributo se trata de um medoto chamado saudar que recebe uma string sobrenome
e não tem retorno é um metodo void


*/
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Silva');
/*
Usando classes
  No caso abaixo eu tenho uma classe que usa a interface Humano
  atraves da diretiva implements, quando isso aocntece a classe
  tem acesso aos atributos e metodos da interface Humano.
*/
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
/* instanciando um objeto com base na classe */
const meuCliente = new Cliente();
//preenchendo o nome 
meuCliente.nome = 'Han';
//usando o metodos saudar 
saudarComOla(meuCliente);
// preenchendo o sobrenome 
meuCliente.saudar('solo');
console.log(meuCliente.ultimaCompra);
