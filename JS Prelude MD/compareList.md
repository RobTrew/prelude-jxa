```javascript
// compareList :: [a] -> [a] -> Ordering
const compareList = xs =>
    // 0 if two lists are identical.
    // -1 if xs is empty, or has a lower leftward value.
    // 1 if ys is empty, or has a lower leftward value.
    ys => compare(
        Number(0 === xs.length)
    )(
        Number(0 === ys.length)
    ) || compare(xs[0])(ys[0]) || (
        compareList(xs.slice(1))(ys.slice(1))
    );
```