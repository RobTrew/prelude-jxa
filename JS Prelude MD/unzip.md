```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    // A list of pairs transposed 
    // to a pair of lists.
    Tuple(
        xys.map(xy => xy[0])
    )(
        xys.map(xy => xy[1])
    );

```