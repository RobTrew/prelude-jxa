```js
// readFile :: FilePath -> IO String
const readFile = fp => {
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
        s
    ) : uw(e.localizedDescription);
};
```