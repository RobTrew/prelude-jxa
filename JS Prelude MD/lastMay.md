```javascript
// lastMay :: [a] -> Maybe a
const lastMay = xs =>
    // Nothing if xs is empty, otherwise
    // Just the last item of xs.
    0 < xs.length
        ? Just(xs.slice(-1)[0])
        : Nothing();
```