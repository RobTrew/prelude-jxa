```applescript
-- getDirectoryContents :: FilePath -> IO [FilePath]on getDirectoryContents(strPath)	set ca to current application	unwrap(ca's NSFileManager's defaultManager()'s contentsOfDirectoryAtPath:¬		unwrap(stringByStandardizingPath of wrap(strPath)) |error|:(missing value))end getDirectoryContents
```

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