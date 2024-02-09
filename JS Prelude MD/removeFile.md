```javascript
// removeFile :: FilePath -> Either String String
const removeFile = fp => {
    const error = $();

    return $.NSFileManager.defaultManager
    .removeItemAtPathError(fp, error)
        ? Right(`Removed: ${fp}`)
        : Left(ObjC.unwrap(error.localizedDescription));
};
```