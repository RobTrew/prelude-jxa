```js
// group :: [a] -> [[a]]
const group = xs => {
    // A list of lists, each containing only equal elements,
    // such that the concatenation of these lists is xs.
    const go = xs =>
        0 < xs.length ? (() => {
            const
                h = xs[0],
                i = xs.findIndex(x => h !== x);
            return i !== -1 ? (
                [xs.slice(0, i)].concat(go(xs.slice(i)))
            ) : [xs];
        })() : [];
    return go(xs);
};
```