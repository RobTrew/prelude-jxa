```js
// emptyToken :: Parser [Char]
const emptyToken = () =>
    Parser(s => [Tuple([])(s)]);
```