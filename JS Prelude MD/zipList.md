```javascript
// ZipList :: a -> {getZipList :: [a]}
const ZipList = x => ({
    // Constructor for an applicative ZipList
    type: "ZipList",
    getZipList: x
});
```