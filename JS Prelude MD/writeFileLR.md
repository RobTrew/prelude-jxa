```javascript
// writeFileLR :: FilePath ->
// String -> Either String IO FilePath
const writeFileLR = fp =>
    // Either a message or the filepath
    // to which the string has been written.
    s => {
        const
            e = $(),
            efp = $(fp).stringByStandardizingPath;

        return $.NSString.alloc.initWithUTF8String(s)
            .writeToFileAtomicallyEncodingError(
                efp, false,
                $.NSUTF8StringEncoding, e
            ) ? (
                Right(ObjC.unwrap(efp))
            ) : Left(ObjC.unwrap(
                e.localizedDescription
            ));
    };
```