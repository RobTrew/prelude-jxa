```js
// mappendComparing :: [(a -> b)] -> (a -> a -> Ordering)
const mappendComparing = fs =>
    (x, y) => fs.reduce(
        (ordr, f) => (ordr || compare(f(x), f(y))),
        0
    );
```