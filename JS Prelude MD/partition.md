```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => [...xs].reduce(
        (a, x) => (
            p(x) ? (
                first
            ) : second
        )(ys => [...ys, x])(a),
        Tuple([])([])
    );
```