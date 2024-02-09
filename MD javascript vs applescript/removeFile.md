```javascript
// removeFile :: FilePath -> Either String String
const removeFile = fp => {
    const error = $();

    return $.NSFileManager.defaultManager
    .removeItemAtPathError(fp, error)
        ? Right(`Removed: ${fp}`)
        : Left(ObjC.unwrap(error.localizedDescription));
};
```


```applescript
-- removeFile :: FilePath -> Either String String
on removeFile(fp)
    set e to reference
    set {bln, obj} to current application's NSFileManager's ¬
        defaultManager's removeItemAtPath:(fp) |error|:(e)
    if bln then
        |Right|("Removed: " & fp)
    else
        |Left|(obj's localizedDescription as string)
    end if
end removeFile
```