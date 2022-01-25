```applescript
-- fileUTI :: FilePath -> Either String String
on fileUTI(fp)
    set {uti, e} to (current application's ¬
        NSWorkspace's sharedWorkspace()'s ¬
        typeOfFile:fp |error|:(reference)) as list
        
    if uti is missing value then
        |Left|(e's localizedDescription() as text)
    else
        |Right|(uti as text)
    end if
end fileUTI
```


```javascript
// fileUTI :: FilePath -> Either String String
const fileUTI = fp => {
    // ObjC.import("AppKit")
    const
        e = $(),
        uti = $.NSWorkspace.sharedWorkspace
        .typeOfFileError(fp, e);

    return uti.isNil() ? (
        Left(ObjC.unwrap(e.localizedDescription))
    ) : Right(ObjC.unwrap(uti));
};
```