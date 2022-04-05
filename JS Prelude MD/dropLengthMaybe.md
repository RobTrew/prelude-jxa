```javascript
// dropLengthMaybe :: [a] -> [b] -> Maybe [b]
const dropLengthMaybe = xs =>
    ys => {
        const go = (x, y) =>
            Boolean(x.length) ? (
                Boolean(y.length) ? (
                    go(x.slice(1), y.slice(1))
                ) : Nothing()
            ) : Just(y);

        return go(xs, ys);
    };
```