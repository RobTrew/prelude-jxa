```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    function() {
        const
            args = arguments,
            xy = Boolean(args.length % 2) ? (
                args[0]
            ) : args;
        return f(xy[0])(xy[1]);
    };
```