```javascript
// mergeBy :: (a -> a -> Ordering) -> [a] -> [a] -> [a]
const mergeBy = f =>
    // A single list defined by the ordered
    // merging of xs and ys in terms of the
    // given comparator function.
    xs => ys => {
        const go = (as, bs) =>
            0 < bs.length ? (
                0 < as.length ? (
                    1 !== f(as[0])(bs[0]) ? (
                        [as[0]].concat(
                            go(as.slice(1), bs)
                        )
                    ) : [bs[0]].concat(
                        go(as, bs.slice(1))
                    )
                ) : bs
            ) : as;

        return [].concat(...go(xs, ys));
    };
```