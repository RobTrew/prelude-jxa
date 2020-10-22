```javascript
// cartesianProduct :: [a] -> [b] -> [[a, b]]
const cartesianProduct = xs =>
    ys => (
        bs => [...xs].flatMap(
            x => bs.flatMap(b => [
                [x].concat(b)
            ])
        )
    )([...ys]);
```