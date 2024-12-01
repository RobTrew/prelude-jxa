```javascript
// zipWithN :: (a -> b -> ... -> c) -> [[a], [b] ...] -> [c]
const zipWithN = f =>
    // Generalisation of ZipWith, ZipWith3 etc.
    // f is a curried function absorbing N arguments,
    // where N is the length of lists.
    lists => {
        const m = Math.min(...lists.map(x => x.length));

        return 0 < lists.length
            ? lists.slice(1).reduce(
                (gs, vs) => gs.slice(0, m).map(
                    (g, i) => g(vs[i])
                ),
                lists[0].slice(0, m).map(f)
            )
            : [];
    };
```