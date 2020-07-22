```js
// thenList (>>) :: [a] -> [b] -> [b]
const thenList = xs => ys =>
    list(xs).flatMap(_ => list(ys));
```