```javascript
// readFileLR :: FilePath -> Either String IO String
const readFileLR = fp => {
    // Either a message or the contents of any
    // text file at the given filepath.
    const
        uw = ObjC.unwrap,
        e = $(),
        ns = $.NSString
        .stringWithContentsOfFileEncodingError(
            $(fp).stringByStandardizingPath,
            $.NSUTF8StringEncoding,
            e
        );

    return ns.isNil()
        ? Left(uw(e.localizedDescription))
        : Right(uw(ns));
};
```