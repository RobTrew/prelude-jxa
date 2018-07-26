```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) =>
    'number' !== typeof m ? (
        enumFromToChar(m, n)
    ) : enumFromToInt(m, n);
```