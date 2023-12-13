```javascript
// compare :: a -> a -> Ordering
const compare = a =>
    b => a < b ? -1 : (a > b ? 1 : 0);
```