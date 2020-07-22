```js
// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) -> String -> [String]
const splitBy = p =>
    // Splitting not on a delimiter, but wherever the relationship
    // between consecutive terms matches a binary predicate.
    xs => (xs.length < 2) ? [xs] : (() => {
        const
            bln = 'string' === typeof xs,
            ys = bln ? xs.split('') : xs,
            h = ys[0],
            parts = ys.slice(1)
            .reduce(([acc, active, prev], x) =>
                p(prev)(x) ? (
                    [acc.concat([active]), [x], x]
                ) : [acc, active.concat(x), x], [
                    [],
                    [h],
                    h
                ]);
        return (bln ? (
            ps => ps.map(cs => ''.concat.apply('', cs))
        ) : x => x)(parts[0].concat([parts[1]]));
    })();
```