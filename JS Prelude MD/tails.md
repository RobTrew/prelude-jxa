```javascript
// tails :: [a] -> [[a]]
const tails = xs =>
    xs.map((_, i) => xs.slice(i))
    .concat([
        []
    ]);
```