```javascript
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce(
        (a, x) => (
            "Left" in x ? (
                first(ys => [...ys, x.Left])
            ) : second(ys => [...ys, x.Right])
        )(a),
        Tuple([])([])
    );
```