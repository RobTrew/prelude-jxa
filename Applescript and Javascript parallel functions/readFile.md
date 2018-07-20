```applescript
-- readFile :: FilePath -> IO String
on readFile(strPath)
    set ca to current application
    set e to reference
    set {s, e} to (ca's NSString's ¬
        stringWithContentsOfFile:((ca's NSString's ¬
            stringWithString:strPath)'s ¬
            stringByStandardizingPath) ¬
            encoding:(ca's NSUTF8StringEncoding) |error|:(e))
    if e is missing value then
        s as string
    else
        (localizedDescription of e) as string
    end if
end readFile
```

```js
// readFile :: FilePath -> IO String
const readFile = fp => {
    const
        e = $(),
        uw = ObjC.unwrap,
        s = uw(
            $.NSString.stringWithContentsOfFileEncodingError(
                $(fp)
                .stringByStandardizingPath,
                $.NSUTF8StringEncoding,
                e
            )
        );
    return undefined !== s ? (
        s
    ) : uw(e.localizedDescription);
};
```