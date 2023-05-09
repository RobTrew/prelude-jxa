```javascript
// bool :: a -> a -> Bool -> a
const bool = f =>
    // t if p(x) else f.
    t => p => p ? t : f;
```