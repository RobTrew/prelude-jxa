```js
// quoted :: Char -> String -> String
const quoted = c =>
    // A string flanked on both sides
    // by a specified quote character.
    s => c + s + c
```