```applescript
-- createDirectoryIfMissingLR :: Bool -> FilePath -> Either String FilePath
on createDirectoryIfMissingLR(blnParents, fp)
    if doesPathExist(fp) then
        |Right|(fp)
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


```javascript
// createDirectoryIfMissingLR :: Bool -> FilePath
// -> Either String FilePath
const createDirectoryIfMissingLR = blnParents =>
    dirPath => {
        const fp = filePath(dirPath);

        return doesPathExist(fp) ? (
            Right(fp)
        ) : (() => {
            const
                e = $(),
                blnOK = $.NSFileManager
                .defaultManager[
                    "createDirectoryAtPath" + (
                        "WithIntermediateDirectories"
                    ) + "AttributesError"
                ](fp, blnParents, void 0, e);

            return blnOK ? (
                Right(fp)
            ) : Left(e.localizedDescription);
        })();
    };
```