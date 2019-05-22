```applescript
-- renameFile :: FilePath -> FilePath -> IO ()
on renameFile(fp, fp2)
    set e to reference
    set {bln, obj} to current application's NSFileManager's ¬
        defaultManager's moveItemAtPath:(fp) toPath:(fp2) |error|:(e)
    if bln then
        |Right|("Renamed from: " & fp & " to " & fp2)
    else
        |Left|(obj's localizedDescription as string)
    end if
end renameFile
```

```js
// renameFile :: FilePath -> FilePath -> IO ()
const renameFile = (fp, fp2) => {
    const error = $();
    return $.NSFileManager.defaultManager
        .moveItemAtPathToPathError(fp, fp2, error) ? (
            Right('Moved to: ' + fp2)
        ) : Left(ObjC.unwrap(error.localizedDescription));
};
```