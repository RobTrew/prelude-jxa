```javascript
// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => {
        const i = xs.findLastIndex(x => !p(x));

        return -1 !== i
            ? xs.slice(1 + i)
            : [];
    };
```