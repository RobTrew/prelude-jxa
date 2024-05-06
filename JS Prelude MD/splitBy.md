```javascript
// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) ->
// String -> [String]
const splitBy = p =>
    // Splitting not on a delimiter, but wherever the
    // relationship between consecutive terms matches
    // a binary predicate.
    xs => (xs.length < 2)
        ? [xs]
        : (() => {
            const
                [h, ...t] = xs,
                ab = t.reduce(
                    ([acc, active, prev], x) =>
                        p(prev)(x)
                            ? [acc.concat([active]), [x], x]
                            : [acc, active.concat(x), x],
                    [[], [h], h]
                );

            return ab[0].concat([ab[1]]);
        })();
```