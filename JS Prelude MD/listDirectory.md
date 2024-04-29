```javascript
// listDirectory :: FilePath -> [FilePath]
const listDirectory = fp =>
    ObjC.deepUnwrap(
        $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(fp).stringByStandardizingPath,
            null
        )
    );
```