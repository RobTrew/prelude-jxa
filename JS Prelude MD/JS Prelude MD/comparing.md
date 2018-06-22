```js
// comparing :: (a -> b) -> (a -> a -> Ordering)
const comparing = f =>
    (x, y) => {
        const
            a = f(x),
            b = f(y);
        return a < b ? -1 : (a > b ? 1 : 0);
    };
```