```js
// copyFileLR :: FilePath -> FilePath -> Either String IO ()
const copyFileLR = fpFrom =>
    fpTo => {
        const fpTargetFolder = takeDirectory(fpTo);
        return doesFileExist(fpFrom) ? (
            doesDirectoryExist(fpTargetFolder) ? (() => {
                const
                    e = $(),
                    blnCopied = ObjC.unwrap(
                        $.NSFileManager.defaultManager
                        .copyItemAtPathToPathError(
                            $(fpFrom).stringByStandardizingPath,
                            $(fpTo).stringByStandardizingPath,
                            e
                        )
                    );
                return blnCopied ? (
                    Right(fpTo)
                ) : Left(ObjC.unwrap(e.localizedDescription));

            })() : Left(
                'Target folder not found: ' + fpTargetFolder
            )
        ) : Left('Source file not found: ' + fpFrom);
    };
```