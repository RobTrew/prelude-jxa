```javascript
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce(
        (a, x) => (
            "Left" in x ? (
                first(ys => ys.concat(x.Left))
            ) : second(ys => ys.concat(x.Right))
        )(a),
        Tuple([])([])
    );
```