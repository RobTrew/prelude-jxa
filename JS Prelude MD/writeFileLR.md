```javascript
// writeFileLR :: FilePath -> Either String IO FilePath
const writeFileLR = fp =>
    s => {
        const
            e = $(),
            efp = $(fp)
            .stringByStandardizingPath;
        return $.NSString.alloc.initWithUTF8String(s)
            .writeToFileAtomicallyEncodingError(
                efp, false,
                $.NSUTF8StringEncoding, e
            ) ? (
                Right(ObjC.unwrap(efp))
            ) : Left(ObjC.unwrap(e.localizedDescription));
    };
```