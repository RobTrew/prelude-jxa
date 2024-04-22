```javascript
// head :: [a] -> a
const head = xs =>
    // The first item (if any) in a list.
    0 < xs.length
        ? xs[0]
        : undefined;
```