```javascript
// importedFrom :: FilePath -> IO Dict
const require = fp =>
    // eslint-disable-next-line no-new-func
    Function(
        readFile(fp)
    )();
```