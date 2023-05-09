```javascript
// transpose :: [[a]] -> [[a]]
const transpose = rows => {
    // If any rows are shorter than those that follow,
    // their elements are skipped:
    // > transpose [[10,11],[20],[],[30,31,32]]
    //             == [[10,20,30],[11,31],[32]]
    const go = xss =>
        Boolean(xss.length) ? (() => {
            const
                h = xss[0],
                t = xss.slice(1);

            return Boolean(h.length) ? [
                [h[0]].concat(t.reduce(
                    (a, xs) => a.concat(
                        Boolean(xs.length) ? (
                            [xs[0]]
                        ) : []
                    ),
                    []
                ))
            ].concat(go([h.slice(1)].concat(
                t.map(xs => xs.slice(1))
            ))) : go(t);
        })() : [];

    return go(rows);
};
```