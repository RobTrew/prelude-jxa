```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    x => ((...args) => {
        const
            xy = 1 < args.length ? (
                args
            ) : args[0];
        return f(xy[0])(xy[1]);
    })(x);
```