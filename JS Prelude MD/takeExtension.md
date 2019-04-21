```js
// takeExtension :: FilePath -> String
const takeExtension = fp => {
    const fs = fp.split('/');
    return 0 < fs.length ? (() => {
        const
            xs = fs.slice(-1)[0].split('.'),
            ext = 1 < xs.length ? (
                xs.slice(-1)[0]
            ) : '';
        return '.' + ext;
    })() : '';
};
```