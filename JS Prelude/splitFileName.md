```js
// Split a filename into directory and file. combine is the inverse.
```

```js
// splitFileName :: FilePath -> (String, String)
const splitFileName = strPath =>
    ('' !== strPath) ? (
         ('/' !== strPath[strPath.length - 1]) ? (() => {
            const
                xs = strPath.split('/'),
                stem = xs.slice(0, -1);
            return stem.length > 0 ? (
                Tuple(stem.join('/') + '/', xs.slice(-1)[0])
            ) : Tuple('./', xs.slice(-1)[0]);
        })() : Tuple(strPath, '')
    ) : Tuple('./', '');
```