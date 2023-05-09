```javascript
// writeFile :: FilePath -> String -> IO ()
const writeFile = fp => s =>
    $.NSString.alloc.initWithUTF8String(s)
    .writeToFileAtomicallyEncodingError(
        $(fp)
        .stringByStandardizingPath, false,
        $.NSUTF8StringEncoding, null
    );
```


```applescript
-- use framework "Foundation"
-- writeFile :: FilePath -> String -> IO ()
on writeFile(strPath, strText)
    set ca to current application
    (ca's NSString's stringWithString:strText)'s ¬
        writeToFile:(stringByStandardizingPath of ¬
            (ca's NSString's stringWithString:strPath)) atomically:true ¬
            encoding:(ca's NSUTF8StringEncoding) |error|:(missing value)
end writeFile
```