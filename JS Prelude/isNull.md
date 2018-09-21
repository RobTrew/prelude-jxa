```js
// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
    Array.isArray(xs) || ('string' === typeof xs) ? (
        1 > xs.length
    ) : undefined;
```