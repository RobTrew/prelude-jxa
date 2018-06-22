```applescript
-- readFile :: FilePath -> IO Stringon readFile(strPath)	set ca to current application	set e to reference	set {s, e} to (ca's NSString's ¬		stringWithContentsOfFile:((ca's NSString's ¬			stringWithString:strPath)'s ¬			stringByStandardizingPath) ¬			encoding:(ca's NSUTF8StringEncoding) |error|:(e))	if e is missing value then		s as string	else		(localizedDescription of e) as string	end ifend readFile
```

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