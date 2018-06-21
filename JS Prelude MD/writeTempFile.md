```js
// File name template -> string data -> IO temporary path
```

```js
// writeTempFile :: String -> String -> IO FilePath
const writeTempFile = (template, txt) => {
    const
        strPath = ObjC.unwrap($.NSTemporaryDirectory()) +
        takeBaseName(template) + Math.random()
        .toString()
        .substring(3) + takeExtension(template);
    return (writeFile(strPath, txt), strPath);
};
```