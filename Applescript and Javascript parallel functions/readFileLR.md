```applescript
-- readFileLR :: FilePath -> Either String String
on readFileLR(strPath)
    set ca to current application
    set e to reference
    set {s, e} to (ca's NSString's ¬
        stringWithContentsOfFile:((ca's NSString's ¬
            stringWithString:strPath)'s ¬
            stringByStandardizingPath) ¬
            encoding:(ca's NSUTF8StringEncoding) |error|:(e))
    if e is missing value then
        |Right|(s as string)
    else
        |Left|(message of e)
    end if
end readFileLR
```

```js
// readFileLR :: FilePath -> Either String String
const readFileLR = strPath => {
    const
        error = $(),
        str = ObjC.unwrap(
            $.NSString.stringWithContentsOfFileEncodingError(
                $(strPath)
                .stringByStandardizingPath,
                $.NSUTF8StringEncoding,
                error
            )
        );
    return Boolean(error.code) ? (
        Left(error.message)
    ) : Right(str);
};
```