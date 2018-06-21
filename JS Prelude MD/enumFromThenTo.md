```js
// enumFromThenTo :: Enum a => a -> a -> a -> [a]
const enumFromThenTo = (x1, x2, y) =>
    (typeof x1 !== 'number' ? (
        enumFromThenToChar
    ) : enumFromThenToInt)
    .apply(null, [x1, x2, y]);
```