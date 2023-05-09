```javascript
// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp =>
    x => xs => {
        const go = y => ys =>
            Boolean(ys.length) ? (
                0 < cmp(y)(ys[0]) ? [
                    ys[0],
                    ...go(y)(ys.slice(1))
                ] : [y, ...ys]
            ) : [y];

        return go(x)(xs);
    };
```