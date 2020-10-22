```js
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // Equivalent to sortBy(comparing(f)), but with f(x)
    // evaluated only once for each x in xs.
    // ('Schwartzian' decorate-sort-undecorate).
    xs => xs.map(
        x => Tuple(f(x))(x)
    )
    .sort(uncurry(comparing(fst)))
    .map(snd);
```