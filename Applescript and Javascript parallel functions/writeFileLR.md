```applescript
-- writeFileLR :: FilePath -> Either String IO FilePath
on writeFileLR(strPath, strText)
    set ca to current application
    set fp to stringByStandardizingPath of ¬
        (ca's NSString's stringWithString:strPath)
    set {bln, e} to (ca's NSString's stringWithString:strText)'s ¬
        writeToFile:(fp) atomically:true ¬
            encoding:(ca's NSUTF8StringEncoding) |error|:(reference)
    if bln and e is missing value then
        |Right|(fp as string)
    else
        |Left|(e's localizedDescription() as string)
    end if
end writeFileLR
```

```js
// writeFileLR :: FilePath -> Either String IO FilePath
const writeFileLR = (strPath, strText) => {
    const
        e = $(),
        fp = $(strPath)
        .stringByStandardizingPath;
    return $.NSString.alloc.initWithUTF8String(strText)
        .writeToFileAtomicallyEncodingError(
            fp, false,
            $.NSUTF8StringEncoding, e
        ) ? (
            Right(ObjC.unwrap(fp))
        ) : Left(ObjC.unwrap(e.localizedDescription));
};
```