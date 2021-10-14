```javascript
// intersectSet :: Set -> Set -> Set
const intersectSet = a =>
    // The intersection of two sets.
    b => new Set([...a].filter(i => b.has(i)));
```