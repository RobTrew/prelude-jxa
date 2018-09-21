```js
// mean :: [Num] -> Num
const mean = xs =>
  xs.reduce((a, x) => a + x, 0) / xs.length;
```