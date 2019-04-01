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

```js
// takeExtension :: Regex String -> FilePath -> String
const takeExtension = charSet => fp => {
    const fs = fp.split('/');
    return 0 < fs.length ? (() => {
        const
            rgx = new RegExp('^[' + charSet + ']+$'),
            xs = fs.slice(-1)[0].split('.'),
            ext = 1 < xs.length ? (
                xs.slice(-1)[0]
            ) : '';
        return rgx.test(ext) ? (
            '.' + ext
        ) : '';
    })() : '';
};
```