```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    function() {
        const
            args = Array.from(arguments),
            a = 1 < args.length ? (
                args
            ) : args[0]; // Tuple object.
        return f(a[0])(a[1]);
    };
```