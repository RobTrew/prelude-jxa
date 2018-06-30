```js
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce((a, x) =>
        x.Left !== undefined ? (
            Tuple(a[0].concat(x.Left), a[1])
        ) : Tuple(a[0], a[1].concat(x.Right)),
        Tuple([], [])
    );
```