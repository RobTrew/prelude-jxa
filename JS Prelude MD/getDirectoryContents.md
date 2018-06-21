```js
// getDirectoryContents :: FilePath -> IO [FilePath]
const getDirectoryContents = strPath =>
    ObjC.deepUnwrap(
        $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(strPath)
            .stringByStandardizingPath, null
        )
    );
```