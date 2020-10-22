```javascript
// fromLeft :: a -> Either a b -> a
const fromLeft = def =>
    // The contents of a 'Left' value, or otherwise a default value.
    lr => isLeft(lr) ? lr.Left : def;
```