```javascript
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    Array.isArray(xs) ? (
        (
            xs.every(x => "string" === typeof x) ? (
                ""
            ) : []
        ).concat(...xs)
    ) : xs;
```