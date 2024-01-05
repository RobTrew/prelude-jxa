```javascript
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    // A tuple of two lists:
    // first all the Left values in xs,
    // and then all the Right values in xs.
    xs.reduce(
        (a, x) => (
            "Left" in x
                ? first(ys => [...ys, x.Left])
                : second(ys => [...ys, x.Right])
        )(a),
        Tuple([])([])
    );
```