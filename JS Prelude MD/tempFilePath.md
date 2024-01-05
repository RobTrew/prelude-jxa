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