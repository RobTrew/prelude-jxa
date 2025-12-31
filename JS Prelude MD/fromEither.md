```javascript
// fromEither :: Either a a -> a
const fromEither = lr =>
    "Left" in lr
        ? lr.Left
        : lr.Right;
```