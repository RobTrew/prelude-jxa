```js
// subsets :: [a] -> [[a]]
const subsets = xs => {
    const go = ys =>
        0 < ys.length ? (() => {
            const subs = go(ys.slice(1));
            return subs.concat(
                subs.map(zs => [ys[0]].concat(zs))
            );
        })() : [
            []
        ];
    return go(xs);
};
```