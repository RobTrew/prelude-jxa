```js
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