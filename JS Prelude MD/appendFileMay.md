```javascript
// appendFileMay :: FilePath -> String -> Maybe IO FilePath
const appendFileMay = fp =>
    // Just the fully-expanded file path of
    // any file at found strPath, after it has been
    // updated by appending the given string, or
    // Nothing if no file is found at that path,
    // or the file is found but can not be updated.
    txt => {
        const fpFull = filePath(fp);

        return doesFileExist(fpFull)
            ? (() => {
                const
                    h = $.NSFileHandle
                    .fileHandleForWritingAtPath(
                        $(fpFull)
                    );

                return (
                    h.seekToEndOfFile,
                    h.writeData(
                        $(txt)
                        .dataUsingEncoding(
                            $.NSUTF8StringEncoding
                        )
                    ),
                    h.closeFile,
                    Just(fpFull)
                );
            })()
            : doesDirectoryExist(takeDirectory(fpFull))
                ? (
                    writeFile(fpFull)(txt),
                    Just(fpFull)
                )
                : Nothing();
    };
```