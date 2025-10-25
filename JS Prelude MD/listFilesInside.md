```javascript
// listFilesInside :: (FilePath -> IO Bool) -> FilePath -> IO [FilePath]
const listFilesInside = p => {
    // Recursive listing of all predicate-matching dependents
    // of the given filepathe.
    const go = fp =>
        doesDirectoryExist(fp)
            ? bindLR(
                getDirectoryContentsLR(fp)
            )(
                fps => [
                    ...bimap(
                        xs => xs.flatMap(go)
                    )(
                        xs => xs.filter(p)
                    )(
                        partition(
                            doesDirectoryExist
                        )(
                            fps.map(combine(fp))
                        )
                    )
                ]
                    .flat()
                    .toSorted()
            )
            : p(fp)
                ? [fp]
                : [];

    return go;
};
```