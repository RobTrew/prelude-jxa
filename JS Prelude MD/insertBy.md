```javascript
// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp =>
    x => xs => {
        const go = y => ys =>
            0 < ys.length ? (
                0 < cmp(y)(ys[0]) ? (
                    cons(ys[0])(
                        go(y)(ys.slice(1))
                    )
                ) : cons(y)(ys)
            ) : [y];

        return go(x)(list(xs));
    };
```