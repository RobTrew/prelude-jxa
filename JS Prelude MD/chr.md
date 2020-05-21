```js
// chr :: Int -> Char
const chr = x =>
    // The character at unix code-point x.
    String.fromCodePoint(x);
```