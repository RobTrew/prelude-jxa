```javascript
// groupOn :: (a -> b) -> [a] -> [[a]]
const groupOn = f =>
    // A list of lists, each containing only elements
    // which return equal values for f,
    // such that the concatenation of these lists is xs.
    xs => 0 < xs.length
        ? groupBy(
            a => b => eq(a[0])(b[0])
        )(
            xs.map(x => [f(x), x])
        )
            .map(gp => gp.map(ab => ab[1]))
        : [];
```