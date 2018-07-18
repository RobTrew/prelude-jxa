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