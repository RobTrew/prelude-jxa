```js
// curryN :: ((a, b) -> c) -> a -> b -> c
const curryN = f =>
    // Flexibly handles two or more arguments, applying
    // the function directly (if the argument list
    // is long enough for complete saturation),
    // or recursing with a concatenation of any existing and
    // newly supplied arguments, while gaps remain.
    (...args) => {
        const
            go = xs => f.length <= xs.length ? (
                f(...xs)
            ) : (...ys) => go([...xs, ...ys]);
        return go(args);
    };
```