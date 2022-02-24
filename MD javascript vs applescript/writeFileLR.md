```applescript
-- writeFileLR :: FilePath -> Either String IO FilePath
on writeFileLR(strPath, strText)
    set ca to current application
    set fp to stringByStandardizingPath of ¬
        (ca's NSString's stringWithString:strPath)
    set {bln, e} to (ca's NSString's stringWithString:strText)'s ¬
        writeToFile:(fp) atomically:true ¬
            encoding:(ca's NSUTF8StringEncoding) |error|:(reference)
    if bln and (missing value is e) then
        |Right|(fp as string)
    else
        |Left|(e's localizedDescription() as string)
    end if
end writeFileLR
```


```javascript
// writeFileLR :: FilePath ->
// String -> Either String IO FilePath
const writeFileLR = fp =>
    // Either a message or the filepath
    // to which the string has been written.
    s => {
        const
            e = $(),
            efp = $(fp).stringByStandardizingPath;

        return $.NSString.alloc.initWithUTF8String(s)
            .writeToFileAtomicallyEncodingError(
                efp, false,
                $.NSUTF8StringEncoding, e
            ) ? (
                Right(ObjC.unwrap(efp))
            ) : Left(ObjC.unwrap(
                e.localizedDescription
            ));
    };
```