```javascript
// tempFilePath :: String -> IO FilePath
const tempFilePath = template => {
    // File name template to temporary path
    // Random digit sequence inserted between
    // template base and extension
    const
        fldr = ObjC.unwrap($.NSTemporaryDirectory()),
        name = takeBaseName(template),
        xtn = takeExtension(template),
        rnd = Math.random().toString()
        .substring(3);

    return `${fldr}${name}${rnd}${xtn}`;
};
```


```applescript
-- tempFilePath :: String -> IO FilePath
on tempFilePath(template)
    (current application's ¬
        NSTemporaryDirectory() as string) & ¬
        takeBaseName(template) & ¬
        text 3 thru -1 of ((random number) as string) & ¬
        takeExtension(template)
end tempFilePath
```