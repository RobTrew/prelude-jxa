```javascript
// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp =>
    // A new list in in which x is inserted into the
    // values of the given list at the first position
    // at which a supplied comparison function, applied
    // to x and the following value, returns LT or EQ.
    x => xs => {
        const go = (y, ys) =>
            Boolean(ys.length)
                ? 0 < cmp(y)(ys[0])
                    ? [ys[0], ...go(y, ys.slice(1))]
                    : [y, ...ys]
                : [y];

        return go(x, xs);
    };
```