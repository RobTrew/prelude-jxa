```js
// writeFileMay :: FilePath -> String -> Maybe FilePath
const writeFileMay = (strPath, strText) => {
    const
        e = $(),
        fullPath = $(strPath)
        .stringByStandardizingPath;
    return $.NSString.alloc.initWithUTF8String(strText)
        .writeToFileAtomicallyEncodingError(
            fullPath, false,
            $.NSUTF8StringEncoding, e
        ) ? (
            Just(ObjC.unwrap(fullPath))
        ) : Nothing();
};
```