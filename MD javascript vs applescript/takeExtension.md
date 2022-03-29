```javascript
// takeExtension :: FilePath -> String
const takeExtension = fp => {
    const fn = last(fp.split("/"));

    return fn.includes(".") ? (
        `.${last(fn.split("."))}`
    ) : "";
};
```


```applescript
-- takeExtension :: FilePath -> String
on takeExtension(strPath)
    set xs to splitOn(".", strPath)
    if 1 < length of xs then
        "." & item -1 of xs
    else
        ""
    end if
end takeExtension
```