```js
// Typical usage: groupBy(on(eq, f), xs)
```

```js
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = (f, xs) => {
    const tpl = xs.slice(1)
        .reduce((a, x) => {
            const h = a[1].length > 0 ? a[1][0] : undefined;
            return h !== undefined && f(h, x) ? (
                Tuple(a[0], a[1].concat([x]))
            ) : Tuple(a[0].concat([a[1]]), [x]);
        }, Tuple([], xs.length > 0 ? [xs[0]] : []));
    return tpl[0].concat([tpl[1]]);
};
```