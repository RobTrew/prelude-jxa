```applescript
-- takeFileName :: FilePath -> FilePath
on takeFileName(strPath)
    if strPath ≠ "" and character -1 of strPath ≠ "/" then
        item -1 of splitOn("/", strPath)
    else
        ""
    end if
end takeFileName
```

```js
// takeFileName :: FilePath -> FilePath
const takeFileName = strPath =>
    strPath !== '' ? (
        strPath[strPath.length - 1] !== '/' ? (
            strPath.split('/')
            .slice(-1)[0]
        ) : ''
    ) : '';
```