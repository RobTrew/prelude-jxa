```js
// pureP :: a -> Parser a
const pureP = x =>
    // The value x lifted, unchanged, 
    // into the Parser monad.
    Parser(s => [Tuple(x)(s)]);
```