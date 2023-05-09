```javascript
// le :: Ord a => a -> a -> a
const le = x =>
    // True if x <= y;
    y => x <= y;
```