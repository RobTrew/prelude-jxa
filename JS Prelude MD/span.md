```javascript
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p =>
    // Longest prefix of xs consisting of elements which
    // all satisfy p, tupled with the remainder of xs.
    xs => {
        const i = xs.findIndex(x => !p(x));
        return -1 !== i ? (
            Tuple(xs.slice(0, i))(
                xs.slice(i)
            )
        ) : Tuple(xs)([]);
    };
```