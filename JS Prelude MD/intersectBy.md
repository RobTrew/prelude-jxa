```javascript
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = eqFn =>
    // The intersection of the lists xs and ys
    // in terms of the equality defined by eq.
    xs => ys => xs.filter(
        x => ys.some(eqFn(x))
    );
```