```js
// enumFromToInt :: Int -> Int -> [Int]
const enumFromToInt = (m, n) =>
    m <= n ? iterateUntil(
        x => n <= x,
        x => 1 + x,
        m
    ) : [];
```