```javascript
// takeDirectory :: FilePath -> FilePath
const takeDirectory = fp =>
    // The directory component of a filepath.
    "" !== fp ? (
        (xs => xs.length > 0 ? xs.join("/") : ".")(
            fp.split("/").slice(0, -1)
        )
    ) : ".";
```