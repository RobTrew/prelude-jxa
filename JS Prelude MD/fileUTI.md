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