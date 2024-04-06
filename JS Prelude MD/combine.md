```javascript
// combine (</>) :: FilePath -> FilePath -> FilePath
const combine = fp =>
    // The concatenation of two filePath segments,
    // without omission or duplication of "/".
    fp1 => Boolean(fp) && Boolean(fp1)
        ? "/" === fp1.slice(0, 1)
            ? fp1
            : "/" === fp.slice(-1)
                ? fp + fp1
                : `${fp}/${fp1}`
        : (fp + fp1);
```