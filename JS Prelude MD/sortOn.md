```js
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // 'Schwartzian' decorate-sort-undecorate.
    // Equivalent to sortBy(comparing(f)), but with 
    // f x evaluated only once for each element in xs.
    xs => xs.map(
        x => [f(x), x]
    ).sort(
        (a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0)
    ).map(x => x[1]);
```