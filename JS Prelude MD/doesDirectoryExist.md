```javascript
// doesDirectoryExist :: FilePath -> IO Bool
const doesDirectoryExist = fp => {
    const ref = Ref();

    return $.NSFileManager.defaultManager
    .fileExistsAtPathIsDirectory(
        $(fp).stringByStandardizingPath, 
        ref
    ) && ref[0];
};
```