```applescript
-- readFileMay :: FilePath -> Maybe Stringon readFileMay(strPath)	set ca to current application	set e to reference	set {s, e} to (ca's NSString's ¬		stringWithContentsOfFile:((ca's NSString's ¬			stringWithString:strPath)'s ¬			stringByStandardizingPath) ¬			encoding:(ca's NSUTF8StringEncoding) |error|:(e))	if e is missing value then		Just(s as string)	else		Nothing()	end ifend readFileMay
```

```js
// readFileMay :: FilePath -> Maybe String
const readFileMay = strPath => {
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
        Nothing()
    ) : Just(str);
};
```