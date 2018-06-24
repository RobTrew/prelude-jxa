```js
// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
    Array.isArray(xs) || ('string' === typeof xs) ? (
        xs.length < 1
    ) : undefined;
```