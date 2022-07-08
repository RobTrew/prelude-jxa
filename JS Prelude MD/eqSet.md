```javascript
// eqSet :: Set a -> Set a -> Bool
const eqSet = a =>
    // True if the two sets have
    // the same size and members.
    b => a.size === b.size && (
        Array.from(a).every(x => b.has(x))
    );
```