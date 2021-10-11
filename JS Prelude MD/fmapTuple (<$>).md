```javascript
// fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
const fmapTuple = f =>
    second(f);
```