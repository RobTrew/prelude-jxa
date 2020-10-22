```javascript
// bool :: a -> a -> Bool -> a
const bool = f =>
    t => p => p ? t : f;
```