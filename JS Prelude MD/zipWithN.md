```javascript
// zipWithN :: (a -> b -> ... -> c) -> [[a], [b] ...] -> [c]
const zipWithN = f =>
    // Generalisation of ZipWith, ZipWith3 etc.
    // f is a curried function absorbing at least 
    // N arguments, where N is the length of xss.
    xss => {
        const m = 0 < xss.length
            ? Math.min(...xss.map(x => x.length))
            : 0;

        return xss.reduce(
            (gs, vs) => gs.map((g, i) => g(vs[i])),
            Array.from({ length: m }, () => f)
        );
    };
```