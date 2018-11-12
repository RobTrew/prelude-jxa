```js
// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = (m, n) =>
    m <= n ? iterateUntil(
        x => n <= x,
        x => 1 + x,
        m
    ) : [];
```