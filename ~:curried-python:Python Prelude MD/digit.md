```js
// digit :: Parser Char
const digit = () =>
    // A single digit.
    satisfy(isDigit);
```