```js
// group :: Eq a => [a] -> [[a]]
const group = xs => groupBy((a, b) => a === b, xs);
```