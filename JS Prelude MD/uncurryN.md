```js
// uncurryN :: Curry a b => b -> a
const uncurryN = f =>
    // A function over a tuple of values, derived from
    // a curried function of any number of arguments.
    (...args) => {
        const
            xy = Array.from(
                1 < args.length ? (
                    args
                ) : args[0]
            );
        return xy.slice(1).reduce((a, x) => a(x), f(xy[0]))
    };
```