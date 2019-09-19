```js
// appendFile :: FilePath -> String -> IO Bool
const appendFile = fp => txt => {
    // The file at fp updated with a new string
    // appended to its existing contents.
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
                const // Not a directory
                    oData = ObjC.wrap(txt)
                    .dataUsingEncoding($.NSUTF8StringEncoding),
                    h = $.NSFileHandle.fileHandleForWritingAtPath(
                        oFullPath
                    );
                return (
                    h.seekToEndOfFile, // Effect, and
                    h.writeData(oData),
                    h.closeFile,
                    true // value.
                );
            })() : false // Text appending to directory is undefined
        ) : doesDirectoryExist(takeDirectory(ObjC.unwrap(fp))) ? (
            writeFile(oFullPath)(txt), // Effect, and
            true // value.
        ) : false;
};
```