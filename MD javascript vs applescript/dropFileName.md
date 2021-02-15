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


```javascript
// dropFileName :: FilePath -> FilePath
const dropFileName = fp =>
    '' !== fp ? (() => {
        const
            xs = (fp.split('/'))
            .slice(0, -1);

        return 0 < xs.length ? (
            `${xs.join('/')}/`
        ) : './';
    })() : './';
```