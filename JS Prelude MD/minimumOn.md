```javascript
// minimumOn :: (Ord b) => (a -> b) -> [a] -> a
const minimumOn = f =>
    // The item in xs for which f
    // returns the highest value.
    xs => 0 < xs.length
        ? xs.slice(1).reduce(
            (tpl, x) => {
                const v = f(x);

                return v < tpl[1]
                    ? Tuple(x)(v)
                    : tpl;
            },
            (h => Tuple(h)(f(h)))(xs[0])
        )[0]
        : undefined;
```