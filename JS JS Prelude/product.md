```js
// product :: [Num] -> Num
const product = xs =>
    list(xs).reduce((a, x) => a * x, 1);
```