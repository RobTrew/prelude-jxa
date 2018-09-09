```applescript
-- Abbreviation for quick testing
```

```applescript
-- ft :: Enum a => a -> a -> [a]
on ft(m, n)
    enumFromTo(m, n)
end ft
```

```js
// Abbreviation for quick testing
```

```js
// ft :: Int -> Int -> [Int]
const ft = (m, n) =>
    Array.from({
        length: 1 + n - m
    }, (_, i) => m + i)
```