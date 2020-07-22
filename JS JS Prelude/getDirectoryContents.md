```js
// getDirectoryContents :: FilePath -> IO [FilePath]
const getDirectoryContents = fp =>
    ObjC.deepUnwrap(
        $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(fp)
            .stringByStandardizingPath, null
        )
    );
```