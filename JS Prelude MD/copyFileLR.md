```javascript
// copyFileLR :: FilePath -> FilePath -> Either String IO ()
const copyFileLR = fpFrom =>
    fpTo => {
        const fpTargetFolder = takeDirectory(fpTo);

        return doesFileExist(fpFrom)
            ? doesDirectoryExist(fpTargetFolder)
                ? (() => {
                    const
                        e = $(),
                        fpTarget = $(fpTo).stringByStandardizingPath;

                    return (
                        $.NSFileManager.defaultManager
                        .copyItemAtPathToPathError(
                            $(fpFrom).stringByStandardizingPath,
                            fpTarget,
                            e
                        )
                            ? Right(ObjC.unwrap(fpTarget))
                            : Left(ObjC.unwrap(e.localizedDescription))
                    );
                })()
                : Left(`Target folder not found: ${fpTargetFolder}`)
            : Left(`Source file not found: ${fpFrom}`);
    };
```