```js
// createDirectoryIfMissingLR :: Bool -> FilePath -> Either String String
const createDirectoryIfMissingLR = (blnParents, dirPath) => {
    const fp = filePath(dirPath);
    return doesPathExist(fp) ? (
        Right(fp)
    ) : (() => {
        const
            e = $(),
            blnOK = $.NSFileManager.defaultManager[
                'createDirectoryAtPath' +
                'WithIntermediateDirectoriesAttributesError'
            ](fp, blnParents, undefined, e);
        return blnOK ? (
            Right(fp)
        ) : Left(e.localizedDescription);
    })();
};
```