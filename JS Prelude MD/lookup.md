```javascript
// lookup :: Eq a => a -> Container -> Maybe b
const lookup = k =>
    // Just of value of the key k in m,
    // or Nothing if m does not contain k.
    m => (Array.isArray(m) ? (
        lookupTuples
    ) : lookupDict)(k)(m);
```