```javascript
// folderFilesWithExtensionLR :: FilePath -> 
// String -> Either String [FilePath]
const folderFilesWithExtensionLR = fpFolder =>
    extension => fmapLR(
        xs => xs.flatMap(
            fp => fp.endsWith(extension)
                ? combine(fpFolder)(fp)
                : []
        )
    )(
        getDirectoryContentsLR(fpFolder)
    );
```