```javascript
// dropLengthMaybe :: [a] -> [b] -> Maybe [b]
const dropLengthMaybe = xs =>
    ys => {
        const go = (x, y) =>
            0 < x.length ? (
                0 < y.length ? (
                    go(x.slice(1), y.slice(1))
                ) : Nothing()
            ) : Just(y);
        return go(xs, ys);
    };
```