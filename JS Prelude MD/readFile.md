```js
// readFile :: FilePath -> IO String
const readFile = strPath => {
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
        ObjC.unwrap(error.localizedDescription)
    ) : str;
};
```