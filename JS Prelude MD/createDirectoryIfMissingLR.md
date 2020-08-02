```js
// createDirectoryIfMissingLR :: Bool -> FilePath -> 
// Either String FilePath
const createDirectoryIfMissingLR = blnParents =>
    dirPath => {
        const fp = filePath(dirPath);
        return doesPathExist(fp) ? (
            Right(fp)
        ) : (() => {
            const
                e = $(),
                blnOK = $.NSFileManager
                .defaultManager
                .createDirectoryAtPathWithIntermediateDirectoriesAttributesError
                (fp, blnParents, undefined, e);
            return blnOK ? (
                Right(fp)
            ) : Left(e.localizedDescription);
        })();
    };
```