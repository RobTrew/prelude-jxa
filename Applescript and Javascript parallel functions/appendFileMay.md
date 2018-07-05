```applescript
-- Write a string to the end of a file. 
-- Returns a Just FilePath value if the 
-- path exists and the write succeeded. 
-- Otherwise returns Nothing.
```

```applescript
-- appendFileMay :: FilePath -> String -> Maybe IO FilePath
on appendFileMay(strPath, txt)
    set ca to current application
    set oFullPath to (ca's NSString's stringWithString:strPath)'s ¬
        stringByStandardizingPath
    set strFullPath to oFullPath as string
    set {blnExists, intFolder} to (ca's NSFileManager's defaultManager()'s ¬
        fileExistsAtPath:oFullPath isDirectory:(reference))
    if blnExists then
        if intFolder = 0 then -- Not a directory
            set oData to (ca's NSString's stringWithString:txt)'s ¬
                dataUsingEncoding:(ca's NSUTF8StringEncoding)
            set h to ca's NSFileHandle's fileHandleForWritingAtPath:oFullPath
            h's seekToEndOfFile
            h's writeData:oData
            h's closeFile()
            Just(strFullPath)
        else
            Nothing()
        end if
    else
        if doesDirectoryExist(takeDirectory(strFullPath)) then
            writeFile(oFullPath, txt)
            Just(strFullPath)
        else
            Nothing()
        end if
    end if
end appendFileMay
```

```js
// appendFileMay :: FilePath -> String -> Maybe IO FilePath
const appendFileMay = (strPath, txt) => {
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
            writeFile(oFullPath, txt), // Effect, and
            Just(strFullPath) // value
        ) : Nothing();
};
```