```javascript
// takeFileName :: FilePath -> FilePath
const takeFileName = fp =>
    '' !== fp ? (
        '/' !== fp[fp.length - 1] ? (
            fp.split('/').slice(-1)[0]
        ) : ''
    ) : '';
```