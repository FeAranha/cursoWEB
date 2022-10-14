## O Basico de var, let e const

De forma simplista a programação é dados processados que geram mais dados. São baseado numa estrutura de dados que possuem regras, no caso de um numero interiro ele não pode ser quebrado, `1,23`, ele deve ser interio `10` e nem receber strings `abcd#@$,./[]\()""` . Estrutura de dados podem ser uma string, inteiro, float, boleano, array, matriz. No **ECMAScript 2015(ES 6)**, nome oficial da linguagem de programação JavaScript que foi implementado o let e const, antes disso não tinha. Nas próximas aulas serão abordados o `scopo` e `“hosting"`, por hora, em JS é primeiro informado o tipo da variável ( `var, let, const` ) um nome para ela e o valor recebido `=`:

```jsx
var a = 3

let b = 3

const c =3

console.log([a,b,c])
```


O JS diferente de outras linguagem aceita a reutilização da variável após declarada porem o `const` não.

```jsx
var a = 3
let b = 4

var a = 30
b = 40

const c = +1

const cc = "+1"

console.log([a, b, c, cc])
```

![Untitled](https://ibb.co/m8FZjv4)

Quando a variavel não tiver motivos para mudar de valor usamos `const`  e para um valor mutável como horário atual  será `let`