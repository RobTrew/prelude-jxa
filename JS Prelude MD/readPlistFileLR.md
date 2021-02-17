```javascript
// readPlistFileLR :: FilePath -> Either String Object
const readPlistFileLR = fp =>
    bindLR(
        doesFileExist(fp) ? (
            Right(filePath(fp))
        ) : Left(`No file found at path:\n\t${fp}`)
    )(fpFull => {
        const
            e = $(),
            maybeDict = (
                $.NSDictionary
                .dictionaryWithContentsOfURLError(
                    $.NSURL.fileURLWithPath(fpFull),
                    e
                )
            );

        return maybeDict.isNil() ? (() => {
            const msg = ObjC.unwrap(e.localizedDescription);

            return Left(`readPlistFileLR:\n\t${msg}`);
        })() : Right(ObjC.deepUnwrap(maybeDict));
    });
```