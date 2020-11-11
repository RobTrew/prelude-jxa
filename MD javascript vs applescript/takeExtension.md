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


```javascript
// takeExtension :: FilePath -> String
const takeExtension = fp => (
    fs => {
        const fn = last(fs);
        return fn.includes('.') ? (
            '.' + last(fn.split('.'))
        ) : '';
    }
)(fp.split('/'));
```