```javascript
// zipWithN :: (a -> b -> ... -> c) -> [[a], [b] ...] -> [c]
const zipWithN = f =>
    // Generalisation of ZipWith, ZipWith3 etc.
    // f is a curried function absorbing N arguments,
    // where N is the length of lists.
    lists => 0 < lists.length
        ? lists.slice(1).reduce(
            (gs, vs) => gs.map((g, i) => g(vs[i])),
            lists[0].map(f)
        )
        : [];
```