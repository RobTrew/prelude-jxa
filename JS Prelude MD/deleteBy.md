```javascript
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = fEq =>
    x => {
        const go = xs => Boolean(xs.length) ? (
            fEq(x)(xs[0]) ? (
                xs.slice(1)
            ) : [xs[0]].concat(go(xs.slice(1)))
        ) : [];

        return go;
    };
```