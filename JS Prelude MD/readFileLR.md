```js
// readFileLR :: FilePath -> Either String String
const readFileLR = fp => {
    const
        e = $(),
        uw = ObjC.unwrap,
        s = uw(
            $.NSString.stringWithContentsOfFileEncodingError(
                $(fp)
                .stringByStandardizingPath,
                $.NSUTF8StringEncoding,
                e
            )
        );
    return undefined !== s ? (
        Right(s)
    ) : Left(uw(e.localizedDescription));
};
```