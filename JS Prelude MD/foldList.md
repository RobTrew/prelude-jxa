```javascript
// foldList :: Monoid m => [m] -> m
const foldList = xs =>
    // The elements of xs combined.
    foldMapList(x => x)(xs);
```