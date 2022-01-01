```javascript
// appEndo :: Endo a -> (a -> a)
const appEndo = endo =>
    // Accessor for the function in an Endo type.
    endo.appEndo;
```