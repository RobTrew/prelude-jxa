```javascript
// transpose :: [[a]] -> [[a]]
const transpose = rows => {
    // If any rows are shorter than those that follow,
    // their elements are skipped:
    // > transpose [[10,11],[20],[],[30,31,32]]
    //             == [[10,20,30],[11,31],[32]]
    const go = xss =>
        0 < xss.length ? (() => {
            const
                h = xss[0],
                t = xss.slice(1);

            return 0 < h.length
                ? [[h[0],
                    ...t.reduce(
                        (a, xs) => a.concat(
                            0 < xs.length
                                ? [xs[0]]
                                : []
                        ),
                        []
                    )],
                ...go([
                    h.slice(1),
                    ...t.map(xs => xs.slice(1))
                ])]
                : go(t);
        })() : [];

    return go(rows);
};
```