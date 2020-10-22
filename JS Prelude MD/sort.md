```javascript
// sort :: Ord a => [a] -> [a]
const sort = xs => list(xs).slice()
    .sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));
```