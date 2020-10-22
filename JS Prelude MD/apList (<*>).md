```javascript
// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = fs =>
    // The sequential application of each of a list
    // of functions to each of a list of values.
    // apList([x => 2 * x, x => 20 + x])([1, 2, 3])
    //     -> [2, 4, 6, 21, 22, 23]
    xs => fs.flatMap(f => xs.map(f));
```