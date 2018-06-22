```js
// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
    Array.isArray(xs) || typeof xs === 'string' ? (
        xs.length < 1
    ) : undefined;
```