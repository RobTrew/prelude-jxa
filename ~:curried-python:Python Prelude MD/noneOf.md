```js
// noneOf :: String -> Parser Char
const noneOf = s =>
    // Any character not found in the
    // exclusion string.
    satisfy(c => !s.includes(c));
```