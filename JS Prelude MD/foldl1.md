```js
// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = f =>
    // Left to right reduction of the non-empty list xs,
    // using the binary operator f, with the head of xs
    // as the initial acccumulator value.
    xs => (
        ys => 1 < ys.length ? ys.slice(1)
        .reduce(uncurry(f), ys[0]) : ys[0]
    )(list(xs));
```