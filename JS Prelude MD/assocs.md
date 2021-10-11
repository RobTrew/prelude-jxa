```javascript
// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.entries(m).map(
        ([k, v]) => Tuple(k)(v)
    );
```