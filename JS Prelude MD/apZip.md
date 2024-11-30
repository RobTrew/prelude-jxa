```javascript
// apZip :: [(a -> b)] -> [a] -> [b]
const apZip = fs =>
    // Zip applicative.
    // Each function in fs applied to the value
    // in the corresponding position in xs.
    xs => fs.slice(
        0, Math.min(fs.length, xs.length)
    )
        .map((f, i) => f(xs[i]));
```