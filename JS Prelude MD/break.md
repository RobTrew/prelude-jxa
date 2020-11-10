```javascript
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    xs => {
        const i = xs.findIndex(p);
        return -1 !== i ? (
            Tuple(xs.slice(0, i))(
                xs.slice(i)
            )
        ) : Tuple(xs)([]);
    };
```