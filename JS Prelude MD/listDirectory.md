```javascript
// listDirectory :: FilePath -> [FilePath]
const listDirectory = fp =>
    ObjC.unwrap(
        $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(fp).stringByStandardizingPath,
            null
        ))
    .map(ObjC.unwrap);
```