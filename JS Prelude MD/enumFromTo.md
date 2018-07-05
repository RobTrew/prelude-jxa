```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) =>
    ('number' !== typeof m ? (
        enumFromToChar
    ) : enumFromToInt).apply(null, [m, n]);
```