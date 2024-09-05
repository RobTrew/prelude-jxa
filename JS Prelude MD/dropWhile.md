```javascript
// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = p =>
    // The suffix remaining after takeWhile p xs.
    xs => {
        const i = xs.findIndex(x => !p(x));

        return -1 !== i
            ? xs.slice(i)
            : [];
    };
```