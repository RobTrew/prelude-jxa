```javascript
// createDirectoryIfMissingLR :: Bool -> FilePath
// -> Either String FilePath
const createDirectoryIfMissingLR = blnParents =>
    dirPath => {
        const fp = filePath(dirPath);

        return doesPathExist(fp)
            ? Right(fp)
            : (() => {
                const
                    e = $(),
                    blnOK = $.NSFileManager
                    .defaultManager[
                    "createDirectoryAtPath" + (
                        "WithIntermediateDirectories"
                    ) + "AttributesError"
                    ](fp, blnParents, void 0, e);

                return blnOK
                    ? Right(fp)
                    : Left(e.localizedDescription);
            })();
    };
```