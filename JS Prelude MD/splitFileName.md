```js
// splitFileName :: FilePath -> (String, String)
const splitFileName = strPath =>
    // Tuple of directory and file name, derived from file path.
    // Inverse of combine.
    ('' !== strPath) ? (
         ('/' !== strPath[strPath.length - 1]) ? (() => {
            const
                xs = strPath.split('/'),
                stem = xs.slice(0, -1);
            return stem.length > 0 ? (
                Tuple(stem.join('/') + '/')(xs.slice(-1)[0])
            ) : Tuple('./')(xs.slice(-1)[0]);
        })() : Tuple(strPath)('')
    ) : Tuple('./')('');
```