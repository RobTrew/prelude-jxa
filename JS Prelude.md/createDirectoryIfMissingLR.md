```js
// createDirectoryIfMissingLR :: Bool -> FilePath ->
//      Either String String
const createDirectoryIfMissingLR = (blnParents, fp) =>
    doesPathExist(fp) ? (
        Right(`Found: '${fp}'`)
    ) : (() => {
        const
            e = $(),
            blnOK = $.NSFileManager.defaultManager[
                'createDirectoryAtPath' +
                'WithIntermediateDirectoriesAttributesError'
            ]($(fp)
                .stringByStandardizingPath,
                blnParents, undefined, e
            );
        return blnOK ? (
            Right(`Created: '${fp}'`)
        ) : Left(e.localizedDescription);
    })();
```