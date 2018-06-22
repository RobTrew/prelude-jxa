```applescript
-- use framework "Foundation"
```

```applescript
-- writeFile :: FilePath -> String -> IO ()on writeFile(strPath, strText)	set ca to current application	(ca's NSString's stringWithString:strText)'s ¬		writeToFile:(stringByStandardizingPath of ¬			(ca's NSString's stringWithString:strPath)) atomically:true ¬			encoding:(ca's NSUTF8StringEncoding) |error|:(missing value)end writeFile
```

```js
// writeFile :: FilePath -> String -> IO ()
const writeFile = (strPath, strText) =>
    $.NSString.alloc.initWithUTF8String(strText)
    .writeToFileAtomicallyEncodingError(
        $(strPath)
        .stringByStandardizingPath, false,
        $.NSUTF8StringEncoding, null
    );
```