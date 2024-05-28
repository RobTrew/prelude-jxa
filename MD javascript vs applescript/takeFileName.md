```applescript
-- takeFileName :: FilePath -> FilePath
on takeFileName(strPath)
    if "" ≠ strPath and "/" ≠ character -1 of strPath then
        item -1 of splitOn("/", strPath)
    else
        ""
    end if
end takeFileName
```


```javascript
// takeFileName :: FilePath -> FilePath
const takeFileName = fp =>
    // The file name component of a filepath.
    0 < fp.length
        ? "/" !== fp[fp.length - 1]
            ? fp.split("/").slice(-1)[0]
            : ""
        : "";
```