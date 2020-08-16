```js
// maximumOn :: (Ord b) => (a -> b) -> [a] -> a
const maximumOn = f =>
    // The item in xs for which f 
    // returns the highest value.
    xs => 0 < xs.length ? (() => {
        const x = xs[0];
        return xs.slice(1).reduce(
            (tpl, x) => {
                const v = f(x);
                return v > tpl[1] ? [
                    x, v
                    ] : tpl;
            },
            [x, f(x)]
        )[0];
    })() : undefined;
```