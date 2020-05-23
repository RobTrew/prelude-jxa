```js
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f =>
    // Use of `take` and `length` here allows zipping with non-finite lists
    // i.e. generators like cycle, repeat, iterate.
    xs => ys => {
        const n = Math.min(length(xs), length(ys));
        return Infinity > n ? (
            (([as, bs]) => Array.from({
                length: n
            }, (_, i) => f(as[i])(
                bs[i]
            )))([xs, ys].map(
                compose(take(n), list)
            ))
        ) : zipWithGen(f)(xs)(ys);
    };
```