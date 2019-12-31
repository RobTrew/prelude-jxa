```js
// dropLength :: [a] -> [b] -> [b]
const dropLength = xs =>
    ys => {
        const go = (x, y) =>
            0 < x.length ? (
                0 < y.length ? (
                    go(x.slice(1), y.slice(1))
                ) : []
            ) : y;
        return go(xs, ys);
    };
```