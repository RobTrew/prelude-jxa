```javascript
// last :: [a] -> a
const last = xs =>
    // The last item of a list.
    Boolean(xs.length) ? (
        xs.slice(-1)[0]
    ) : null;
```