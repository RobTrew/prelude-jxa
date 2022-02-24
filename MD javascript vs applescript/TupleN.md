```applescript
-- Requires N arguments to be wrapped as one list in AS 
-- (the JS version accepts N separate arguments)
-- TupleN :: a -> b ...  -> (a, b ... )
on TupleN(argv)
    tupleFromList(argv)
end TupleN
```


```javascript
// TupleN :: a -> b ...  -> (a, b ... )
const TupleN = (...args) => {
    // A Tuple of an arbitrary number of items.
    const n = args.length;

    return 2 < n ? Object.assign(
        args.reduce((a, x, i) => Object.assign(a, {
            [i]: x
        }), {
            type: `Tuple${n}`,
            length: n,
            *[Symbol.iterator]() {
                for (const k in this) {
                    if (!isNaN(k)) {
                        yield this[k];
                    }
                }
            }
        })
    ) : args.reduce((f, x) => f(x), Tuple);
};
```