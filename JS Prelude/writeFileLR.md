```js
// writeFileLR :: FilePath -> Either String IO FilePath
const writeFileLR = (strPath, strText) => {
    const
        e = $(),
        fp = $(strPath)
        .stringByStandardizingPath;
    return $.NSString.alloc.initWithUTF8String(strText)
        .writeToFileAtomicallyEncodingError(
            fp, false,
            $.NSUTF8StringEncoding, e
        ) ? (
            Right(ObjC.unwrap(fp))
        ) : Left(ObjC.unwrap(e.localizedDescription));
};
```