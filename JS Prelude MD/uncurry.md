```javascript
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a Tuple or argument pair, 
    // derived from a curried function.
    (...args) => {
        const [x, y] = 2 <= args.length
            ? args
            : args[0]

        return f(x)(y);
    };
```