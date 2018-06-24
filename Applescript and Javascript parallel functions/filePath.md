```applescript
-- filePath :: String -> FilePath
on filePath(s)
    ((current application's ¬
        NSString's stringWithString:s)'s ¬
        stringByStandardizingPath()) as string
end filePath
```

```js
// filePath :: String -> FilePath
const filePath = s =>
    ObjC.unwrap(ObjC.wrap(s)
        .stringByStandardizingPath);
```