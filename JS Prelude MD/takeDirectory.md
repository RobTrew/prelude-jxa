```javascript
// takeDirectory :: FilePath -> FilePath
const takeDirectory = fp =>
    '' !== fp ? (
        (xs => xs.length > 0 ? xs.join('/') : '.')(
            fp.split('/').slice(0, -1)
        )
    ) : '.';
```