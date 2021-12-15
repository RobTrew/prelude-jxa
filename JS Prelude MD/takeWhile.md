```javascript
// takeWhile :: (a -> Bool) -> [a] -> [a]
const takeWhile = p =>
    xs => {
        const i = xs.findIndex(x => !p(x));

        return -1 !== i ? (
            xs.slice(0, i)
        ) : xs;
    };
```