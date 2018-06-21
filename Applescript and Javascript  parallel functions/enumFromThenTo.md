```js
-- enumFromThenTo :: Enum a => a -> a -> a -> [a]on enumFromThenTo(x1, x2, y)	if class of x1 is integer then		enumFromThenToInt(x1, x2, y)	else		enumFromThenToChar(x1, x2, y)	end ifend enumFromThenTo
```

```js
// enumFromThenTo :: Enum a => a -> a -> a -> [a]
const enumFromThenTo = (x1, x2, y) =>
    (typeof x1 !== 'number' ? (
        enumFromThenToChar
    ) : enumFromThenToInt)
    .apply(null, [x1, x2, y]);
```