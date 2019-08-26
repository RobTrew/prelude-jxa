```js
// appendFileMay :: FilePath -> String -> Maybe IO FilePath
const appendFileMay = strPath => txt => {
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
                const // Not a directory
                    oData = ObjC.wrap(txt)
                    .dataUsingEncoding($.NSUTF8StringEncoding),
                    h = $.NSFileHandle
                    .fileHandleForWritingAtPath(oFullPath);
                return (
                    h.seekToEndOfFile, // Effect, and
                    h.writeData(oData),
                    h.closeFile, {
                        Nothing: false,
                        Just: strFullPath
                    } // value.
                );
            })() : Nothing()
            // Text appending to directory is undefined
        ) : doesDirectoryExist(takeDirectory(strFullPath)) ? (
            writeFile(oFullPath)(txt), // Effect, and
            Just(strFullPath) // value
        ) : Nothing();
};
```