```js
// takeDirectory :: FilePath -> FilePath
const takeDirectory = strPath =>
    ('' !== strPath) ? (() => {
        const xs = (strPath.split('/'))
            .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/')
        ) : '.';
    })() : '.';
```