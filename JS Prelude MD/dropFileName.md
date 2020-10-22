```javascript
// dropFileName :: FilePath -> FilePath
const dropFileName = fp =>
    '' !== fp ? (() => {
        const
          xs = (fp.split('/'))
          .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/') + '/'
        ) : './';
    })() : './';
```