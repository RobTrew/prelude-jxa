```javascript
// init :: [a] -> [a]
const init = xs =>
    // All elements of a list except the last.
    Boolean(xs.length) ? (
        xs.slice(0, -1)
    ) : null;
```