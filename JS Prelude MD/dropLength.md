```javascript
// dropLength :: [a] -> [b] -> [b]
const dropLength = xs =>
    ys => {
        const go = (x, y) =>
            Boolean(x.length) ? (
                Boolean(y.length) ? (
                    go(x.slice(1), y.slice(1))
                ) : []
            ) : y;

        return go(xs, ys);
    };
```