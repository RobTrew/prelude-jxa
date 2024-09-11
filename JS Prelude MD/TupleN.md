```javascript
// TupleN :: a -> b ...  -> (a, b ... )
const TupleN = (...args) => {
    // A Tuple of an arbitrary number of items.
    const n = args.length;

    return {
        ...args.reduce(
            (a, x, i) => ({
                ...a,
                [i]: x
            }),
            {
                type: 2 !== n
                    ? `Tuple${n}`
                    : "Tuple",
                length: n,
                *[Symbol.iterator]() {
                    for (const k in this) {
                        if (!isNaN(k)) {
                            yield this[k];
                        }
                    }
                }
            })
    };
};
```