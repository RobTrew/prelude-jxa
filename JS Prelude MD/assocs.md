```javascript
// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    // A list of (key, value) tuples derived from
    // the given dictionary.
    Object.entries(m).map(
        ([k, v]) => Tuple(k)(v)
    );
```