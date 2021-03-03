```javascript
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length ? (
        (
            xs.every(x => "string" === typeof x) ? (
                ""
            ) : []
        ).concat(...xs)
    ) : xs;
```