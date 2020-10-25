```javascript
// doesFileExist :: FilePath -> IO Bool
const doesFileExist = fp => {
    const ref = Ref();
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(fp)
            .stringByStandardizingPath, ref
        ) && 1 !== ref[0];
};
```


```applescript
-- doesFileExist :: FilePath -> IO Bool
on doesFileExist(strPath)
    set ca to current application
    set oPath to (ca's NSString's stringWithString:strPath)'s ¬
        stringByStandardizingPath
    set {bln, int} to (ca's NSFileManager's defaultManager's ¬
        fileExistsAtPath:oPath isDirectory:(reference))
    bln and (int ≠ 1)
end doesFileExist
```