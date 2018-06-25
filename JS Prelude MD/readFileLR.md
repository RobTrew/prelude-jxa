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