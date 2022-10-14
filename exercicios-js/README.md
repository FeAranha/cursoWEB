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

![Untitled](https://i.ibb.co/k16b73X/var-Let-Const.png)

Quando a variavel não tiver motivos para mudar de valor usamos `const`  e para um valor mutável como horário atual  será `let`

## Tipagem fraca

Cada linguagem possui uma tipagem para lidar com os dados numéricos, textos, conjunto, lista etc. Em algumas linguagens de programação quando declaramos uma variavel como int(inteiro) ela não poderá ser alterada para um texto por exemplo, ao contrario do JavaScript(JS) que é tipagem dinâmica,  fracamente tipada. No TypeScript da Microsoft baseado no JS conseguimos “tipar o JS”. PHP também é de tipagem fraca ao contrario de Java e C#.

Evitar nome genérico e siglas, preferir código claro do que comentários:

```jsx
let qualquer = 'lugar'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

//Evitar nome genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... ¯\_(ツ)_/¯ 😐
```

## ternário

No unário é um operador, no binário é dois e há três operando no ternário a **expressão relacional** `?`(operador ternário, caso verdadeiro) ’Aprovado’ `:`(caso falso) ‘Reprovado’ 

```jsx
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.2))
console.log(resultado(6.7))
```

Aprovado

Reprovado