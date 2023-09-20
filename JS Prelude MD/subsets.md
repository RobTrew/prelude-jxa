```javascript
// subsets :: [a] -> [[a]]
const subsets = xs => {
    // The list of sublists of xs,
    // including the empty list.
    const go = ys =>
        0 < ys.length
            ? (() => {
                const
                    h = ys[0],
                    zs = go(ys.slice(1));

                return [
                    ...zs,
                    ...zs.map(z => [h, ...z])
                ];
            })()
            : [[]];

    return go(xs);
};
```