```js
// replicate :: Int -> a -> [a]
const replicate = n => x =>
    Array.from({
        length: n
    }, () => x);
```