```applescript
-- getCurrentDirectory :: IO FilePath
on getCurrentDirectory()
    set ca to current application
    ca's NSFileManager's defaultManager()'s currentDirectoryPath as string
end getCurrentDirectory
```


```javascript
// getCurrentDirectory :: IO FilePath
const getCurrentDirectory = () =>
    ObjC.unwrap(
        $.NSFileManager.defaultManager
        .currentDirectoryPath
    );
```