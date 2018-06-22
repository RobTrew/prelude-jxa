```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) =>
    (typeof m !== 'number' ? (
        enumFromToChar
    ) : enumFromToInt).apply(null, [m, n]);
```