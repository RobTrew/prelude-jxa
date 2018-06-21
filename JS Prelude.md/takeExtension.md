```js
// takeExtension :: FilePath -> String
const takeExtension = strPath => {
    const
        xs = strPath.split('.'),
        lng = xs.length;
    return lng > 1 ? (
        '.' + xs[lng - 1]
    ) : '';
};
```