```javascript
// setCurrentDirectory :: FilePath -> IO ()
const setCurrentDirectory = fp =>
    $.NSFileManager.defaultManager
    .changeCurrentDirectoryPath(
        $(fp).stringByStandardizingPath
    );
```


```applescript
-- setCurrentDirectory :: String -> IO ()
on setCurrentDirectory(strPath)
    if doesDirectoryExist(strPath) then
        set ca to current application
        set oPath to (ca's NSString's stringWithString:strPath)'s ¬
            stringByStandardizingPath
        ca's NSFileManager's defaultManager()'s ¬
            changeCurrentDirectoryPath:oPath
    end if
end setCurrentDirectory
```