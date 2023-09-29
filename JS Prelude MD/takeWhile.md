```javascript
// takeWhile :: (a -> Bool) -> [a] -> [a]
const takeWhile = p =>
    // The longest prefix of xs in which
    // all elements satisfy p.
    xs => {
        const i = xs.findIndex(x => !p(x));

        return -1 !== i ? (
            xs.slice(0, i)
        ) : xs;
    };
```