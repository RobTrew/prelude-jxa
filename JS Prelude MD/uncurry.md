```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    function() {
        const args = Array.from(arguments);
        const xy = [2, 4].includes(args.length) ? (
            args
        ) : args[0];
        return f(xy[0])(xy[1]);
    };
```