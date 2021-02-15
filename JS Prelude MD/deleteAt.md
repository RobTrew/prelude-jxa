```javascript
// deleteAt :: Int -> [a] -> [a]
const deleteAt = i =>
    xs => i <= xs.length ? (() => {
        const lr = splitAt(i)(xs);

        return lr[0].concat(lr[1].slice(1));
    })() : xs;
```