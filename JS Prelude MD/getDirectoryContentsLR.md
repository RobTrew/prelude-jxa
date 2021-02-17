```javascript
// getDirectoryContentsLR :: FilePath ->
// Either String IO [FilePath]
const getDirectoryContentsLR = fp => {
    const
        error = $(),
        xs = $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(fp).stringByStandardizingPath,
            error
        );

    return xs.isNil() ? (
        Left(ObjC.unwrap(error.localizedDescription))
    ) : Right(ObjC.deepUnwrap(xs));
};
```