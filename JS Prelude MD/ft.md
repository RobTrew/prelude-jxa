```js
// Abbreviation for quick testing
```

```js
// ft :: (Int, Int) -> [Int]
const ft = (m, n) =>
    Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);
```