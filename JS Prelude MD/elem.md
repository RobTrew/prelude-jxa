```js
// elem :: Eq a => a -> [a] -> Bool
// elem :: Char -> String -> Bool
const elem = x =>
    xs => Array.isArray(xs) ? (
        xs.some(eq(x))
    ) : xs.includes(x);
```