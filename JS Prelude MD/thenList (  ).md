```js
// thenList (>>) :: [a] -> [b] -> [b]
const thenList = xs => ys =>
    xs.flatMap(_ => ys);
```