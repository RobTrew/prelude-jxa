```javascript
// fileStatus :: FilePath -> Either String Dict
const fileStatus = fp => {
    const
        e = $(),
        dct = $.NSFileManager.defaultManager
        .attributesOfItemAtPathError(
            ObjC.wrap(fp).stringByStandardizingPath,
            e
        );

    return dct.isNil() ? (
        Left(ObjC.unwrap(e.localizedDescription))
    ) : Right(ObjC.deepUnwrap(dct));
};
```