```js
// union :: [a] -> [a] -> [a]
const union = (xs, ys) =>
  unionBy((a, b) => a === b, xs, ys);
```