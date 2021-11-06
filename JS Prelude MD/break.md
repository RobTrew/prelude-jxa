```javascript
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    // The longest prefix of xs for in which
    // all value return true for p.
    xs => {
        const i = xs.findIndex(p);

        return -1 !== i ? (
            Tuple(xs.slice(0, i))(
                xs.slice(i)
            )
        ) : Tuple(xs)([]);
    };
```