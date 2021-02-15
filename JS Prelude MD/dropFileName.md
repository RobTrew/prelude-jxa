```javascript
// dropFileName :: FilePath -> FilePath
const dropFileName = fp =>
    '' !== fp ? (() => {
        const
            xs = (fp.split('/'))
            .slice(0, -1);

        return 0 < xs.length ? (
            `${xs.join('/')}/`
        ) : './';
    })() : './';
```