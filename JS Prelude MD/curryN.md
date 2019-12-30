```js
// curryN :: ((a, b) -> c) -> a -> b -> c
const curryN = f =>
    // Flexibly handles two or more arguments, applying
    // the function directly (if the argument array
    // is long enough for complete saturation),
    // or recursing with a concatenation of any existing and
    // newly supplied arguments, while gaps remain.
    (...args) => {
        const
            n = f.length,
            go = xs => n <= xs.length ? (
                f(...xs)
            ) : function() {
                return go(xs.concat(Array.from(arguments)));
            };
        return go(args);
    };
```