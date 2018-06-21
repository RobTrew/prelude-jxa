```js
// thenList (>>) :: [a] -> [b] -> [b]
const thenList = (xs, ys) =>
    concatMap(_ => ys, xs);
```