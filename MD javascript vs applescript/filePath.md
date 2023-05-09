```javascript
// filePath :: String -> FilePath
const filePath = s =>
    // The given file path with any tilde expanded
    // to the full user directory path.
    ObjC.unwrap(
        ObjC.wrap(s).stringByStandardizingPath
    );
```


```applescript
-- filePath :: String -> FilePath
on filePath(s)
    ((current application's ¬
        NSString's stringWithString:s)'s ¬
        stringByStandardizingPath()) as string
end filePath
```