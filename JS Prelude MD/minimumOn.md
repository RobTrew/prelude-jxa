```js
// minimumOn :: (Ord b) => (a -> b) -> [a] -> a
const minimumOn = f =>
    // The item in xs for which f 
    // returns the highest value.
    xs => 0 < xs.length ? (() => {
        const h = xs[0];
        return xs.slice(1).reduce(
            (tpl, x) => {
                const v = f(x);
                return v < tpl[1] ? [
                    x, v
                ] : tpl;
            },
            [h, f(h)]
        )[0];
    })() : undefined;
```