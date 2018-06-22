```js
// enumFromThenToInt :: Int -> Int -> Int -> [Int]
const enumFromThenToInt = (x1, x2, y) => {
    const d = x2 - x1;
    return Array.from({
        length: Math.floor(y - x2) / d + 2
    }, (_, i) => x1 + (d * i));
};
```