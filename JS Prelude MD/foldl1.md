```js
// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = f =>
    // Left to right reduction of the non-empty list xs, 
    // using the binary operator f, with the head of xs
    // as the initial acccumulator value.
    xs => 1 < xs.length ? xs.slice(1)
    .reduce(uncurry(f), xs[0]) : xs[0];
```