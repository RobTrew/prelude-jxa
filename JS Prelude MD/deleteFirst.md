```js
// deleteFirst :: a -> [a] -> [a]
const deleteFirst = x => {
    const go = xs => 0 < xs.length ? (
        x === xs[0] ? (
            xs.slice(1)
        ) : [xs[0]].concat(go(xs.slice(1)))
    ) : [];
    return go;
};
```