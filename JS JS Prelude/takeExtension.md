```js
// takeExtension :: FilePath -> String
const takeExtension = fp => (
    fs => 0 < fs.length ? (
        xs => '.' + 1 < xs.length ? (
            xs.slice(-1)[0]
        ) : ''
    )(
        fs.slice(-1)[0].split('.')
    ) : ''
)(fp.split('/'));
```