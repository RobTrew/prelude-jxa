```js
// applyN :: Int -> (a -> a) -> a -> a
const applyN = n => f => x =>
    Array.from({
        length: n
    }, () => f)
    .reduce((a, g) => g(a), x)
```