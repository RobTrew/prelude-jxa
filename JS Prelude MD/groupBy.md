```javascript
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = eqOp =>
    // A list of lists, each containing only elements
    // equal under the given equality operator,
    // such that the concatenation of these lists is xs.
    xs => 0 < xs.length ? (() => {
        const [h, ...t] = xs;
        const [groups, g] = t.reduce(
            ([gs, a], x) => eqOp(x)(a[0]) ? (
                Tuple(gs)([...a, x])
            ) : Tuple([...gs, a])([x]),
            Tuple([])([h])
        );

        return [...groups, g];
    })() : [];
```