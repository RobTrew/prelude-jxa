```javascript
// zipWithN_ :: ((a, b ...) -> d) -> [a], [b] ... -> [d]
const zipWithN_ = (f, ...xss) =>
    // Generalisation of ZipWith, ZipWith3 etc.
    // f is an uncurried function with arity
    // equal to the length of xss.
    Array.from(
        {
            length: 0 < xss.length
                ? Math.min(...xss.map(x => x.length))
                : 0
        },
        (_, i) => f(
            ...xss.map(xs => xs[i])
        )
    );
```