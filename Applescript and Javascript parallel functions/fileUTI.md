```applescript
-- fileUTI :: FilePath -> String
on fileUTI(fp)
    set {uti, e} to (current application's ¬
        NSWorkspace's sharedWorkspace()'s ¬
        typeOfFile:fp |error|:(reference)) as list
    if uti is missing value then
        e's localizedDescription() as text
    else
        uti as text
    end if
end fileUTI
```

```js
// ObjC.import('AppKit')
```

```js
// fileUTI :: FilePath -> Either String String
const fileUTI = fp => {
    const
        e = $(),
        uti = $.NSWorkspace.sharedWorkspace
        .typeOfFileError(fp, e);
    return uti.isNil() ? (
        Left(ObjC.unwrap(e.localizedDescription))
    ) : Right(ObjC.unwrap(uti));
};
```