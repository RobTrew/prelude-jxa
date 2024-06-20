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


```applescript
-- appendFileMay :: FilePath -> String -> Maybe IO FilePath
on appendFileMay(strPath, txt)
    -- Write a string to the end of a file. 
    -- Returns a Just FilePath value if the 
    -- path exists and the write succeeded. 
    -- Otherwise returns Nothing.
    set ca to current application
    set oFullPath to (ca's NSString's stringWithString:strPath)'s ¬
        stringByStandardizingPath
    set strFullPath to oFullPath as string
    set {blnExists, intFolder} to (ca's NSFileManager's defaultManager()'s ¬
        fileExistsAtPath:oFullPath isDirectory:(reference))
    if blnExists then
        if 0 = intFolder then -- Not a directory
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