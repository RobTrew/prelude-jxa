```javascript
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = eqOp =>
    // A list of lists, each containing only elements
    // equal under the given equality operator, such
    // that the concatenation of these lists is xs.
    xs => 0 < xs.length
        ? (() => {
            const
                h = xs[0],
                t = xs.slice(1),
                [groups, g] = t.reduce(
                    ([gs, a], x) => eqOp(a[0])(x)
                        ? [gs, a.concat(x)]
                        : [gs.concat([a]), [x]],
                    [[], [h]]
                );

            return groups.concat([g]);
        })()
        : [];
```