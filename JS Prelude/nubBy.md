```js
// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = (p, xs) => {
    const go = xs => 0 < xs.length ? (() => {
        const x = xs[0];
        return [x].concat(
            go(xs.slice(1)
                .filter(y => !p(x, y))
            )
        )
    })() : [];
    return go(xs);
};
```