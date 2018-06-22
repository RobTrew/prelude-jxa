```applescript
-- doesFileExist :: FilePath -> IO Boolon doesFileExist(strPath)	set ca to current application	set oPath to (ca's NSString's stringWithString:strPath)'s ¬		stringByStandardizingPath	set {bln, int} to (ca's NSFileManager's defaultManager's ¬		fileExistsAtPath:oPath isDirectory:(reference))	bln and (int ≠ 1)end doesFileExist
```

```js
// doesFileExist :: FilePath -> IO Bool
const doesFileExist = strPath => {
    const ref = Ref();
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(strPath)
            .stringByStandardizingPath, ref
        ) && ref[0] !== 1;
};
```