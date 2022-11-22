```javascript
// groupOn :: (a -> b) -> [a] -> [[a]]
const groupOn = f =>
    // A list of lists, each containing only elements
    // which return equal values for f,
    // such that the concatenation of these lists is xs.
    xs => 0 < xs.length ? (() => {
        const [h, ...t] = xs;
        const [groups, g] = t.reduce(
            ([gs, a], x) => f(x) === f(a[0]) ? (
                [gs, [...a, x]]
            ) : [[...gs, a], [x]],
            [[], [h]]
        );

        return [...groups, g];
    })() : [];
```