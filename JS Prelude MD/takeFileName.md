```javascript
// takeFileName :: FilePath -> FilePath
const takeFileName = fp =>
    // The file name component of a filepath.
    0 < fp.length
        ? "/" !== fp[fp.length - 1]
            ? fp.split("/").slice(-1)[0]
            : ""
        : "";
```