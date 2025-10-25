```javascript
// listFilesRecursive :: FilePath -> IO [FilePath]
const listFilesRecursive = fp =>
    // Recursive list of all files descending from FilePath
    listFilesInside(() => true)(fp);
```