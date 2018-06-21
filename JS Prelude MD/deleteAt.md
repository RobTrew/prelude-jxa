```js
// deleteAt :: Int -> [a] -> [a]
const deleteAt = (i, xs) =>
    xs.length >= i ? (() => {
        const lr = splitAt(i, xs);
        return lr[0].concat(lr[1].slice(1));
    })() : xs;
```