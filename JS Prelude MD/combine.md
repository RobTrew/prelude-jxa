```javascript
// combine (</>) :: FilePath -> FilePath -> FilePath
const combine = fp =>
    // Two paths combined with a path separator.
    // Just the second path if that starts with
    // a path separator.
    fp1 => Boolean(fp) && Boolean(fp1) ? (
        '/' === fp1.slice(0, 1) ? (
            fp1
        ) : '/' === fp.slice(-1) ? (
            fp + fp1
        ) : `${fp}/${fp1}`
    ) : fp + fp1;
```