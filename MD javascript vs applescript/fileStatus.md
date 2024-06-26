```javascript
// fileStatus :: FilePath -> Either String Dict
const fileStatus = fp => {
    const
        e = $(),
        dct = $.NSFileManager.defaultManager
        .attributesOfItemAtPathError(
            $(fp).stringByStandardizingPath,
            e
        );

    return dct.isNil()
        ? Left(ObjC.unwrap(e.localizedDescription))
        : Right(ObjC.deepUnwrap(dct));
};
```


```applescript
-- fileStatus :: FilePath -> Either String Dict
on fileStatus(fp)
    set e to reference
    set {v, e} to current application's NSFileManager's defaultManager's ¬
        attributesOfItemAtPath:fp |error|:e

    if v is not missing value then
        |Right|(v as record)
    else
        |Left|((localizedDescription of e) as string)
    end if
end fileStatus
```