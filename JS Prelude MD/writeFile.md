```js
// writeFile :: FilePath -> String -> IO ()
const writeFile = (strPath, strText) =>
    $.NSString.alloc.initWithUTF8String(strText)
    .writeToFileAtomicallyEncodingError(
        $(strPath)
        .stringByStandardizingPath, false,
        $.NSUTF8StringEncoding, null
    );
```