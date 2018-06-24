```applescript
-- dropFileName :: FilePath -> FilePath
on dropFileName(strPath)
    if strPath ≠ "" then
        if character -1 of strPath = "/" then
            strPath
        else
            set xs to init(splitOn("/", strPath))
            if xs ≠ {} then
                intercalate("/", xs) & "/"
            else
                "./"
            end if
        end if
    else
        "./"
    end if
end dropFileName
```

```js
// dropFileName :: FilePath -> FilePath
const dropFileName = strPath =>
    strPath !== '' ? (() => {
        const xs = (strPath.split('/'))
            .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/') + '/'
        ) : './';
    })() : './';
```