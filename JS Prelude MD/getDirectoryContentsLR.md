```js
// getDirectoryContentsLR :: FilePath -> Either String IO [FilePath]
const getDirectoryContentsLR = strPath => {
    const
        error = $(),
        xs = $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(strPath).stringByStandardizingPath,
            error
        );
    return xs.isNil() ? (
        Left(ObjC.unwrap(error.localizedDescription))
    ) : Right(ObjC.deepUnwrap(xs))
};
```