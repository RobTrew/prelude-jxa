```javascript
// appendFile :: FilePath -> String -> IO Bool
const appendFile = fp =>
    // The file at fp updated with a new string
    // appended to its existing contents.
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
                    true
                );
            })()
            : doesDirectoryExist(takeDirectory(fpFull))
                ? (writeFile(fpFull)(txt), true)
                : false;
    };
```