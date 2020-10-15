```js
// char :: Char -> Parser Char
const char = x =>
    // A particular single character.
    satisfy(c => x == c);
```