```js
// takeFileName :: FilePath -> FilePath
const takeFileName = strPath =>
    '' !== strPath ? (
        ('/' !== strPath[strPath.length - 1]) ? (
            strPath.split('/')
            .slice(-1)[0]
        ) : ''
    ) : '';
```