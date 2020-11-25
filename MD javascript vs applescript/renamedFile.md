```javascript
// renamedFile :: FilePath -> FilePath -> 
// Either IO String IO String
const renamedFile = fp =>
    // Either a message detailing a problem, or
    // confirmation of a filename change in the OS.
    fp1 => {
        const error = $();
        return $.NSFileManager.defaultManager
            .moveItemAtPathToPathError(fp, fp1, error) ? (
                Right(fp1)
            ) : Left(ObjC.unwrap(
                error.localizedDescription
            ));
    };
```


```applescript
-- renamedFile :: FilePath -> FilePath ->
-- Either IO String IO String
on renamedFile(fp, fp2)
    set e to reference
    set {bln, obj} to current application's NSFileManager's ¬
        defaultManager's moveItemAtPath:(fp) toPath:(fp2) |error|:(e)
    if bln then
        |Right|(fp2)
    else
        |Left|(obj's localizedDescription as string)
    end if
end renameFile
```