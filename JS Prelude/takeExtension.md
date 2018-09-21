```js
// takeExtension :: FilePath -> String
const takeExtension = strPath => {
    const
        xs = strPath.split('.'),
        lng = xs.length;
    return 1 < lng ? (
        '.' + xs[lng - 1]
    ) : '';
};
```