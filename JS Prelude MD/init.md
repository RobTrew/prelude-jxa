```javascript
// init :: [a] -> [a]
const init = xs =>
    // All elements of a list except the last.
    0 < xs.length ? (
        xs.slice(0, -1)
    ) : null;
```