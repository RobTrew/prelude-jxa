```js
// combine :: FilePath -> FilePath -> FilePath
const combine = folderPath =>
    // A filePath composed from two parts,
    // with intercalation of '/' if needed.
    fileName => folderPath + (
        folderPath.endsWith('/') || fileName.startsWith('/') ? (
            ''
        ) : '/'
    ) + fileName;
```