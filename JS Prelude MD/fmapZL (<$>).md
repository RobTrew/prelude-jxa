```javascript
// fmapZL (<$>) :: (a -> b) -> ZipList a -> ZipList b
const fmapZL = f =>
    // f mapped over the contents of a ZipList
    // of finite or infinite length.
    zl => ZipList(
        (() => {
            const xs = zl.getZipList;

            return Infinity > xs.length ? (
                xs.map(f)
            ) : fmapGen(f)(xs);
        })()
    );
```