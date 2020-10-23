```javascript
// append (<>) :: [a] -> [a] -> [a]
const append = xs =>
    // A list defined by the
    // concatenation of two others.
    ys => xs.concat(ys);
```