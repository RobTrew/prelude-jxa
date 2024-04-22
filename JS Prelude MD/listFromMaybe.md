```javascript
// listFromMaybe :: Maybe a -> [a]
const listFromMaybe = mb =>
    // A singleton list derived from a Just value,
    // or an empty list derived from Nothing.
    mb.Nothing
        ? []
        : [mb.Just];
```