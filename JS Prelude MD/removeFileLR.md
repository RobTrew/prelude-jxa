```javascript
// removeFileLR :: FilePath -> Either String String
const removeFileLR = fp => {
    const error = $();

    return $.NSFileManager.defaultManager
    .removeItemAtPathError(fp, error)
        ? Right(`Removed: ${fp}`)
        : Left(ObjC.unwrap(error.localizedDescription));
};
```