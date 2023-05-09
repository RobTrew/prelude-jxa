```javascript
// listDirectory :: FilePath -> [FilePath]
const listDirectory = fp =>
    ObjC.unwrap(
        $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            ObjC.wrap(fp)
            .stringByStandardizingPath,
            null
        ))
    .map(ObjC.unwrap);
```