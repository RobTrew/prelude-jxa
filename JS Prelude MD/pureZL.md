```javascript
// pureZL :: a -> ZipList a
const pureZL = x =>
    // A value lifted into a ZipList
    ZipList(repeat(x));
```