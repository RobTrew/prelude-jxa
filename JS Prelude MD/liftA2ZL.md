```javascript
// liftA2ZL :: (a -> b -> c) -> ZipList a ->
// ZipList b -> ZipList c
const liftA2ZL = op =>
    // A ZipList formed by the pairwise application of
    // binary op over the values of two existing ZipLists
    // up to the length of the shorter of these.
    zxs => zys => ZipList(
        zipWith(op)(
            zxs.getZipList
        )(
            zys.getZipList
        )
    );
```