```javascript
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = fEq =>
    // A copy of the given list excluding the first
    // item which matches x in terms of the supplied
    // fEq equality operator.
    x => {
        const go = xs => 0 < xs.length
            ? fEq(x)(xs[0])
                ? xs.slice(1)
                : [xs[0], ...go(xs.slice(1))]
            : [];

        return go;
    };
```