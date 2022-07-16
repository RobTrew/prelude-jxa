```javascript
// fmapZL (<$>) :: (a -> b) -> ZipList a -> ZipList b
const fmapZL = f =>
    // f mapped over the contents of a ZipList
    zl => ZipList(zl.getZipList.map(f));
```