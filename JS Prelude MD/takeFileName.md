```javascript
// takeFileName :: FilePath -> FilePath
const takeFileName = fp =>
    // The file name component of a filepath.
    "" !== fp ? (
        "/" !== fp[fp.length - 1] ? (
            fp.split("/").slice(-1)[0]
        ) : ""
    ) : "";
```