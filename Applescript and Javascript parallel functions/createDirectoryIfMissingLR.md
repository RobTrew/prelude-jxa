```applescript
-- createDirectoryIfMissingLR :: Bool -> FilePath -> Either String String
on createDirectoryIfMissingLR(blnParents, fp)
    if doesPathExist(fp) then
        |Right|("Found: '" & fp & "'")
    else
        set e to reference
        set ca to current application
        set oPath to (ca's NSString's stringWithString:(fp))'s ¬
            stringByStandardizingPath
        set {blnOK, e} to ca's NSFileManager's ¬
            defaultManager's createDirectoryAtPath:(oPath) ¬
            withIntermediateDirectories:(blnParents) ¬
            attributes:(missing value) |error|:(e)
        if blnOK then
            |Right|(fp)
        else
            |Left|((localizedDescription of e) as string)
        end if
    end if
end createDirectoryIfMissingLR
```

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