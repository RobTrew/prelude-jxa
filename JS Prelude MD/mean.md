```js
// mean :: [Num] -> Num
const mean = xs => (
    ys => ys.reduce((a, y) => a + y, 0) / ys.length
)(list(xs));
```