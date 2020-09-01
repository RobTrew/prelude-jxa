```js
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // Equivalent to sortBy(comparing(f)), but with f(x)
    // evaluated only once for each x in xs.
    // ('Schwartzian' decorate-sort-undecorate).
    xs => list(xs).map(
        bimap(f)(identity)
    )
    .sort(uncurry(comparing(fst)))
    .map(snd);
```