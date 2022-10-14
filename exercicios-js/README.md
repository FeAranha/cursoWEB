## O Basico de var, let e const

De forma simplista a programação é dados processados que geram mais dados. São baseado numa estrutura de dados que possuem regras, no caso de um numero interiro ele não pode ser quebrado, `1,23`, ele deve ser interio `10` e nem receber strings `abcd#@$,./[]\()""` . Estrutura de dados podem ser uma string, inteiro, float, boleano, array, matriz. No **ECMAScript 2015(ES 6)**, nome oficial da linguagem de programação JavaScript que foi implementado o let e const, antes disso não tinha. Nas próximas aulas serão abordados o `scopo` e `“hosting"`, por hora, em JS é primeiro informado o tipo da variável ( `var, let, const` ) um nome para ela e o valor recebido `=`:

```jsx
var a = 3

let b = 3

const c =3

console.log([a,b,c])
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/edcf7af1-7dcf-49a8-a46d-ec7ace5a8c14/Untitled.png)

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

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5494aa16-f273-42c9-9f21-cc6512c54658/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/43471c26-368e-4b0b-88ee-7f376b3d6049/Untitled.png)

Quando a variavel não tiver motivos para mudar de valor usamos `const`  e para um valor mutável como horário atual  será `let`