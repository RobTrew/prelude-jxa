```javascript
// apZL (<*>) :: ZipList (a -> b) -> ZipList a -> ZipList b
// The application of a function in one ZipList
// to each value in another ZipList.
const apZL = zf =>
    liftA2ZL(x => x)(zf);
```