```js
// Splitting not on a delimiter, but wherever the relationship
// between consecutive terms matches a binary predicate
```

```js
// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) -> String -> [String]
const splitBy = (p, xs) =>
    2 > xs.length ? [xs] : (() => {
        const [a, r] = foldl(
            (a, [bln, x, y]) => bln ? (
                [fst(a).concat([snd(a)]), [y]]
            ) : [fst(a), snd(a).concat(y)],
            Tuple([], [xs[0]]),
            zipWith(
                (a, b) => [p(a, b), a, b],
                xs, tail(xs)
            )
        );
        return (
            'string' !== typeof xs ? id : (
                x => map(concat, x)
            )
        )(a.concat([r]));
    })();
```