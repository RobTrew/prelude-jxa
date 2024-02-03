```javascript
// setCurrentDirectory :: FilePath -> IO ()
const setCurrentDirectory = fp =>
    $.NSFileManager.defaultManager
    .changeCurrentDirectoryPath(
        $(fp).stringByStandardizingPath
    );
```