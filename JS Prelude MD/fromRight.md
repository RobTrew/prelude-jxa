```javascript
// fromRight :: b -> Either a b -> b
const fromRight = def =>
    // The contents of a 'Right' value or otherwise a default value.
    lr => isRight(lr) ? (
        lr.Right
    ) : def;
```