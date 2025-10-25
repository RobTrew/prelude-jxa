```javascript
// takeDirectory :: FilePath -> FilePath
const takeDirectory = fp =>
    // The directory component of a filepath.
    0 < fp.length
        ? (() => {
            const xs = fp.split("/").slice(0, -1);

            return 0 < xs.length
                ? xs.join("/")
                : ".";
        })()
        : ".";
```