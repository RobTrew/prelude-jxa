```javascript
// readFile :: FilePath -> IO String
const readFile = fp => {
    // The contents of a text file at the
    // given file path.
    const
        e = $(),
        ns = $.NSString
        .stringWithContentsOfFileEncodingError(
            $(fp).stringByStandardizingPath,
            $.NSUTF8StringEncoding,
            e
        );

    return ObjC.unwrap(
        ns.isNil()
            ? e.localizedDescription
            : ns
    );
};
```