```javascript
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce(
        (a, x) => "Left" in x ? (
            Tuple(a[0])(a[1].concat(x.Right))
        ) : Tuple(a[0].concat(x.Left))(a[1]),
        Tuple([])([])
    );
```