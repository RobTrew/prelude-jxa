```js
// readFile :: FilePath -> IO String
const readFile = fp => {
    const
        e = $(),
        ns = $.NSString.stringWithContentsOfFileEncodingError(
            $(fp).stringByStandardizingPath,
            $.NSUTF8StringEncoding,
            e
        );
    return ObjC.unwrap(
        ns.isNil() ? (
            e.localizedDescription
        ) : ns
    );
};
```