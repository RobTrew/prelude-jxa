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
// fileUTI :: FilePath -> String
const fileUTI = fp => {
    const
        e = $(),
        uti = ObjC.unwrap(
            $.NSWorkspace.sharedWorkspace
            .typeOfFileError(fp, e)
        );
    return undefined !== uti ? (
        uti
    ) : ObjC.unwrap(e.localizedDescription);
};
```