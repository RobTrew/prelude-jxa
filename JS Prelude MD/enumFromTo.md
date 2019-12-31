```js
// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = m =>
    n => Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);
```