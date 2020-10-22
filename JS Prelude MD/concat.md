```javascript
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs => (
    ys => 0 < ys.length ? (
        ys.every(Array.isArray) ? (
            []
        ) : ''
    ).concat(...ys) : ys
)(list(xs));
```