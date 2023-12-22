```javascript
// setCurrentDirectory :: FilePath -> IO ()
const setCurrentDirectory = fp =>
    $.NSFileManager.defaultManager
    .changeCurrentDirectoryPath(
        ObjC.wrap(fp)
        .stringByStandardizingPath
    );
```