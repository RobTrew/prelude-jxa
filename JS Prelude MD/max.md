```javascript
// max :: Ord a => a -> a -> a
const max = a =>
    // b if greater than a,
    // otherwise a.
    b => gt(b)(a)
        ? b
        : a;
```