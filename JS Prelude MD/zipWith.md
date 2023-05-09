```javascript
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f =>
    // A list with the length of the shorter of
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => {
        const n = Math.min(length(xs), length(ys));

        return Infinity > n ? (
            (([as, bs]) => Array.from({
                length: n
            }, (_, i) => f(as[i])(
                bs[i]
            )))([xs, ys].map(
                take(n)
            ))
        ) : zipWithGen(f)(xs)(ys);
    };
```