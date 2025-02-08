```javascript
// cartesianProduct :: [a] -> [b] -> [[a, b]]
const cartesianProduct = xs =>
    // Every tuple in the cartesian product
    // of xs and ys.
    ys => [...xs].flatMap(
        x => [...ys].map(
            Tuple(x)
        )
    );
```