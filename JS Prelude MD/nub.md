```javascript
// nub :: Eq a => [a] -> [a]
const nub = xs =>
    [...new Set(xs)];
```