```javascript
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a Tuple or argument pair, 
    // derived from a curried function.
    (...args) => {
        const h = args[0];
        const [x, y] = Array.isArray(h) || (
            "Tuple" === h?.type
        )
            ? h
            : args;

        return f(x)(y);
    };
```