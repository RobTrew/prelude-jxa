```javascript
// appendFileMay :: FilePath -> String -> Maybe IO FilePath
const appendFileMay = strPath =>
    // Just the fully-expanded file path of
    // any file at found strPath, after it has been
    // updated by appending the given string, or
    // Nothing if no file is found at that path,
    // or the file is found but can not be updated.
    txt => {
        const
            oFullPath = ObjC.wrap(strPath)
            .stringByStandardizingPath,
            strFullPath = ObjC.unwrap(oFullPath),
            ref = Ref();

        return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            oFullPath
            .stringByStandardizingPath, ref
        ) ? (
                0 === ref[0] ? (() => {
                    const
                        oData = ObjC.wrap(txt)
                        .dataUsingEncoding($.NSUTF8StringEncoding),
                        h = $.NSFileHandle
                        .fileHandleForWritingAtPath(oFullPath);

                    return (
                        h.seekToEndOfFile,
                        h.writeData(oData),
                        h.closeFile, {
                            Nothing: false,
                            Just: strFullPath
                        }
                    );
                })() : Nothing()
                // Text appending to directory is undefined
            ) : doesDirectoryExist(takeDirectory(strFullPath)) ? (
                writeFile(oFullPath)(txt),
                Just(strFullPath)
            ) : Nothing();
    };
```