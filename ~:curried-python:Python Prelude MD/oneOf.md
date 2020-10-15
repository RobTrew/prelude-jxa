```js
// oneOf :: [Char] -> Parser Char
const oneOf = s =>
    // One instance of any character found
    // the given string.
    satisfy(c => s.includes(c));
```