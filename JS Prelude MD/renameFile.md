```js
// renameFile :: FilePath -> FilePath -> IO ()
const renameFile = (fp, fp2) => {
    const error = $();
    return $.NSFileManager.defaultManager
        .moveItemAtPathToPathError(fp, fp2, error) ? (
            Right('Moved to: ' + fp2)
        ) : Left(ObjC.unwrap(error.localizedDescription));
};
```