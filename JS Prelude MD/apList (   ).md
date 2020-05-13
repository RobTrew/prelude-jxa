```js
// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = fs =>
    // The sequential application of each of a list
    // of functions to each of a list of values.
    xs => fs.flatMap(
        f => list(xs).map(f)
    );
```