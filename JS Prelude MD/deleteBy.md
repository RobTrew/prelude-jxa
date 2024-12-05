```javascript
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = fEq =>
    // A copy of the given list excluding the first
    // item which matches x in terms of the supplied
    // fEq equality operator.
    x => xs => {
        const i = xs.findIndex(fEq(x));

        return -1 === i
            ? xs.slice(0)
            : xs.slice(0, i).concat(
                xs.slice(1 + i)
            );
    };
```