```applescript
-- writeFileMay :: FilePath -> String -> Maybe FilePathon writeFileMay(strPath, strText)	set ca to current application	set strFullPath to stringByStandardizingPath of ¬		wrap(strPath)	if wrap(strText)'s writeToFile:(strFullPath) atomically:false ¬		encoding:(ca's NSUTF8StringEncoding) |error|:(missing value) then		Just(unwrap(strFullPath))	else		Nothing()	end ifend writeFileMay
```

```js
// writeFileMay :: FilePath -> String -> Maybe FilePath
const writeFileMay = (strPath, strText) => {
    const
        e = $(),
        fullPath = $(strPath)
        .stringByStandardizingPath;
    return $.NSString.alloc.initWithUTF8String(strText)
        .writeToFileAtomicallyEncodingError(
            fullPath, false,
            $.NSUTF8StringEncoding, e
        ) ? (
            Just(ObjC.unwrap(fullPath))
        ) : Nothing();
};
```