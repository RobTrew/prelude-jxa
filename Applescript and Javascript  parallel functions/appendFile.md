```applescript
-- Write a string to the end of a file. 
-- Returns true if the path exists 
-- and the write succeeded. 
-- Otherwise returns false.
```

```applescript
-- appendFile :: FilePath -> String -> IO Boolon appendFile(strPath, txt)	set ca to current application	set oFullPath to (ca's NSString's stringWithString:strPath)'s ¬		stringByStandardizingPath	set {blnExists, intFolder} to (ca's NSFileManager's defaultManager()'s ¬		fileExistsAtPath:oFullPath isDirectory:(reference))	if blnExists then		if intFolder = 0 then			set oData to (ca's NSString's stringWithString:txt)'s ¬				dataUsingEncoding:(ca's NSUTF8StringEncoding)			set h to ca's NSFileHandle's fileHandleForWritingAtPath:oFullPath			h's seekToEndOfFile			h's writeData:oData			h's closeFile()			true		else			-- text appended to folder is undefined			false		end if	else		if doesDirectoryExist(takeDirectory(oFullPath as string)) then			writeFile(oFullPath, txt)			true		else			false		end if	end ifend appendFile
```

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