```javascript
// filesCopiedLR :: FilePath -> [FilePath] ->
// FilePath -> IO Either String [FilePath]
const filesCopiedLR = fpSourceFolder =>
    // Either a message, or a list of the files
    // successfully copied from the source folder
    // to the target folder, or already found in place.
    fileNames => fpTargetFolder => {
        const
            lrs = fileNames.map(k => {
                const tgt = combine(fpTargetFolder)(k);

                return doesFileExist(tgt) ? (
                    Right(tgt)
                ) : copyFileLR(
                    combine(fpSourceFolder)(k)
                )(tgt);
            }),
            ls = lefts(lrs);

        return 0 < ls.length ? (
            Left(ls[0])
        ) : Right(rights(lrs));
    };
```