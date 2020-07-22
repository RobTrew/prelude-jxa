```js
// head :: [a] -> a
const head = xs => (
    ys => ys.length ? (
        ys[0]
    ) : undefined
)(list(xs));
```