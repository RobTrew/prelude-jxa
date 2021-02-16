```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which don't.
    xs => list(xs).reduce(
        (a, x) => p(x) ? (
            Tuple(a[0].concat(x))(a[1])
        ) : Tuple(a[0])(a[1].concat(x)),
        Tuple([])([])
    );
```