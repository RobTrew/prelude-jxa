```javascript
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    (...args) => {
        const
            [x, y] = Boolean(args.length % 2)
                ? args[0]
                : args;

        return f(x)(y);
    };
```