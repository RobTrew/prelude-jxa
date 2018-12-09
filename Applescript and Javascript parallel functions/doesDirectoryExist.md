```applescript
-- doesDirectoryExist :: FilePath -> IO Bool
on doesDirectoryExist(strPath)
    set ca to current application
    set oPath to (ca's NSString's stringWithString:strPath)'s ¬
        stringByStandardizingPath
    set {bln, int} to (ca's NSFileManager's defaultManager's ¬
        fileExistsAtPath:oPath isDirectory:(reference))
    bln and (int = 1)
end doesDirectoryExist
```

```js
// doesDirectoryExist :: FilePath -> IO Bool
const doesDirectoryExist = strPath => {
    const ref = Ref();
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(strPath)
            .stringByStandardizingPath, ref
        ) && ref[0];
};
```