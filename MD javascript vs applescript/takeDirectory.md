```javascript
// takeDirectory :: FilePath -> FilePath
const takeDirectory = fp =>
    // The directory component of a filepath.
    "" !== fp
        ? (() => {
            const xs = fp.split("/").slice(0, -1);

            return 0 < xs.length
                ? xs.join("/")
                : ".";
        })()
        : ".";
```


```applescript
-- takeDirectory :: FilePath -> FilePath
on takeDirectory(fp)
    set strPath to filePath(fp)
    if "" ≠ strPath then
        if "/" = character -1 of strPath then
            text 1 thru -2 of strPath
        else
            set xs to init(splitOn("/", strPath))
            if {} ≠ xs then
                intercalateS("/", xs)
            else
                "."
            end if
        end if
    else
        "."
    end if
end takeDirectory
```