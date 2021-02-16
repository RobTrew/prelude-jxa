```javascript
// appendFile :: FilePath -> String -> IO Bool
const appendFile = fp =>
    // The file at fp updated with a new string
    // appended to its existing contents.
    txt => {
        const
            oFullPath = ObjC.wrap(fp)
            .stringByStandardizingPath,
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
                        h = $.NSFileHandle.fileHandleForWritingAtPath(
                            oFullPath
                        );

                    return (
                        h.seekToEndOfFile,
                        h.writeData(oData),
                        h.closeFile,
                        true
                    );
                })() : false 
            ) : doesDirectoryExist(takeDirectory(ObjC.unwrap(fp))) ? (
                writeFile(oFullPath)(txt),
                true
            ) : false;
    };
```