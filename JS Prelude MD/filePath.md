```javascript
// filePath :: String -> FilePath
const filePath = s =>
    // The given file path with any tilde expanded
    // to the full user directory path.
    ObjC.unwrap(
        $(s).stringByStandardizingPath
    );
```