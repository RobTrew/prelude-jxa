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
    if missing value is e then
        s as string
    else
        (localizedDescription of e) as string
    end if
end readFile
```


```javascript
// readFile :: FilePath -> IO String
const readFile = fp => {
    // The contents of a text file at the
    // filepath fp.
    const
        e = $(),
        ns = $.NSString
        .stringWithContentsOfFileEncodingError(
            $(fp).stringByStandardizingPath,
            $.NSUTF8StringEncoding,
            e
        );
    return ObjC.unwrap(
        ns.isNil() ? (
            e.localizedDescription
        ) : ns
    );
};
```