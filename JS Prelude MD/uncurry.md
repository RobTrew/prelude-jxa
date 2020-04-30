```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    function() {
        const
            args = Array.from(arguments),
            xy = 2 !== args.length ? (
                args[0]
            ) : args
        return f(xy[0])(xy[1])
    };
```