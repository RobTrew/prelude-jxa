```javascript
// subsets :: [a] -> [[a]]
const subsets = xs => {
    const go = ys =>
        Boolean(ys.length) ? (() => {
            const
                h = ys[0],
                zs = go(ys.slice(1));

            return zs.concat(
                zs.map(z => [h].concat(z))
            );
        })() : [
            []
        ];

    return go(xs);
};
```