```js
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p =>
    // Longest prefix of xs consisting of elements which
    // all satisfy p, tupled with the remainder of xs.
    xs => {
        const
            ys = 'string' !== typeof xs ? (
                list(xs)
            ) : xs,
            iLast = ys.length - 1;
        return splitAt(
            until(
                i => iLast < i || !p(ys[i])
            )(i => 1 + i)(0)
        )(ys);
    };
```