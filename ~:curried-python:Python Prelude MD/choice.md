```js
// choice :: [Parser a] -> Parser a 
const choice = ps =>
    // A parser constructed from a 
    // (left to right) list of alternatives.
    ps.reduce(uncurry(altP), emptyP());
```