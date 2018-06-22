```js
// filePath :: String -> FilePath
const filePath = s =>
    ObjC.unwrap(ObjC.wrap(s)
        .stringByStandardizingPath);
```