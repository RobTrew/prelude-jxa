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


```applescript
-- appendFile :: FilePath -> String -> IO Bool
on appendFile(strPath, txt)
    -- Write a string to the end of a file. 
    -- Returns true if the path exists 
    -- and the write succeeded. 
    -- Otherwise returns false.
    set ca to current application
    set oFullPath to (ca's NSString's stringWithString:strPath)'s ¬
        stringByStandardizingPath
    set {blnExists, intFolder} to (ca's NSFileManager's defaultManager()'s ¬
        fileExistsAtPath:oFullPath isDirectory:(reference))
        
    if blnExists then
        if 0 = intFolder then
            set oData to (ca's NSString's stringWithString:txt)'s ¬
                dataUsingEncoding:(ca's NSUTF8StringEncoding)
            set h to ca's NSFileHandle's fileHandleForWritingAtPath:oFullPath
            h's seekToEndOfFile
            h's writeData:oData
            h's closeFile()
            true
        else
            -- text appended to folder is undefined
            false
        end if
    else
        if doesDirectoryExist(takeDirectory(oFullPath as string)) then
            writeFile(oFullPath, txt)
            true
        else
            false
        end if
    end if
end appendFile
```