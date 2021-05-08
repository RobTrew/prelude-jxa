```javascript
// doesDirectoryExist :: FilePath -> IO Bool
const doesDirectoryExist = fp => {
    const ref = Ref();

    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(fp)
            .stringByStandardizingPath, ref
        ) && ref[0];
};
```


```applescript
-- doesDirectoryExist :: FilePath -> IO Boolon doesDirectoryExist(strPath)    set ca to current application    set oPath to (ca's NSString's stringWithString:strPath)'s ¬        stringByStandardizingPath    set {bln, v} to (ca's NSFileManager's defaultManager's ¬        fileExistsAtPath:oPath isDirectory:(reference))    bln and vend doesDirectoryExist
```