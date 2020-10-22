```javascript
// tails :: [a] -> [[a]]
const tails = xs => (
    es => es.map((_, i) => es.slice(i))
    .concat([
        []
    ])
)(list(xs));
```