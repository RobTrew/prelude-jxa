```js
// whiteSpace :: Parser String
const whiteSpace = () =>
    // Zero or more non-printing characters.
    many(oneOf(' \t\n\r'));
```