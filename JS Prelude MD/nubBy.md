```javascript
// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = fEq => {
    const go = xs => 0 < xs.length ? (() => {
        const x = xs[0];
        return [x].concat(
            go(xs.slice(1)
                .filter(y => !fEq(x)(y))
            )
        );
    })() : [];
    return compose(go, list);
};
```