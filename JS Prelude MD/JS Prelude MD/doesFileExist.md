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