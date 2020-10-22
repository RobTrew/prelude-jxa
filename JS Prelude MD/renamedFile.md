```js
// renamedFile :: FilePath -> FilePath -> 
// Either String IO String
const renamedFile = fp =>
    // Either a message detailing a problem, or
    // confirmation of a filename change in the OS.
    fp1 => {
        const error = $();
        return $.NSFileManager.defaultManager
            .moveItemAtPathToPathError(fp, fp1, error) ? (
                Right('Moved to: ' + fp1)
            ) : Left(ObjC.unwrap(
                error.localizedDescription
            ));
    };
```