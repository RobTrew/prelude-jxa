```javascript
// takeDirectory :: FilePath -> FilePath
const takeDirectory = fp =>
    // The directory component of a filepath.
    "" !== fp
        ? (() => {
            const xs = fp.split("/").slice(0, -1);

            return 0 < xs.length
                ? xs.join("/")
                : ".";
        })()
        : ".";
```