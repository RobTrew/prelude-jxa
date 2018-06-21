```js
// appendFile :: FilePath -> String -> IO Bool
const appendFile = (strPath, txt) => {
    const
        oFullPath = ObjC.wrap(strPath)
        .stringByStandardizingPath,
        ref = Ref();
  
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            oFullPath
            .stringByStandardizingPath, ref
        ) ? (
            ref[0] === 0 ? (() => {
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
        ) : doesDirectoryExist(takeDirectory(ObjC.unwrap(strPath))) ? (
            writeFile(oFullPath, txt), // Effect, and
            true // value.
        ) : false;
};
```