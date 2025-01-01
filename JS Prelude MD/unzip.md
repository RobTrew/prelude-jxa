```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    // A list of the first items in each pair
    // of the zip, tupled with a list of all
    // the second items.
    Tuple(
        xys.map(xy => xy[0])
    )(
        xys.map(xy => xy[1])
    );

```