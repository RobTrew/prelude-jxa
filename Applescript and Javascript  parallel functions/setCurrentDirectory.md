```applescript
-- setCurrentDirectory :: String -> IO ()on setCurrentDirectory(strPath)	if doesDirectoryExist(strPath) then		set ca to current application		set oPath to (ca's NSString's stringWithString:strPath)'s ¬			stringByStandardizingPath		ca's NSFileManager's defaultManager()'s ¬			changeCurrentDirectoryPath:oPath	end ifend setCurrentDirectory
```

```js
// setCurrentDirectory :: String -> IO ()
const setCurrentDirectory = strPath =>
    $.NSFileManager.defaultManager
    .changeCurrentDirectoryPath(
        ObjC.wrap(strPath)
        .stringByStandardizingPath
    );
```