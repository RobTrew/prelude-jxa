```js
// lexemes :: Parser [String]
const lexemes = () =>
    // Zero or more space-delimited words.
    many(token(word()));
```