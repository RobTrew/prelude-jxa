```js
// Typical usage: groupBy(on(eq, f), xs)
```

```js
// Typical usage: groupBy(on(eq, f), xs)
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = f => xss => {
    const tpl = xs.slice(1)
        .reduce((a, x) => {
            const h = a[1].length > 0 ? a[1][0] : undefined;
            return (undefined !== h) && f(h)(x) ? (
                Tuple(a[0])(a[1].concat([x]))
            ) : Tuple(a[0].concat([a[1]]))([x]);
        }, Tuple([])(0 < xs.length ? [xs[0]] : []));
    return tpl[0].concat([tpl[1]]);
};
```