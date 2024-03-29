```javascript
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // Equivalent to sortBy(comparing(f)), but with f(x)
    // evaluated only once for each x in xs.
    // ('Schwartzian' decorate-sort-undecorate).
    xs => sortBy(
        comparing(x => x[0])
    )(
        xs.map(x => [f(x), x])
    )
    .map(x => x[1]);
```