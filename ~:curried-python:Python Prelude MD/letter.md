```js
// letter :: Parser Char
const letter = () =>
    // A single alphabetic character.
    satisfy(isAlpha);
```