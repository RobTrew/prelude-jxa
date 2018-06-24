```applescript
-- tempFilePath :: String -> IO FilePath
on tempFilePath(template)
    (current application's ¬
        NSTemporaryDirectory() as string) & ¬
        takeBaseName(template) & ¬
        text 3 thru -1 of ((random number) as string) & ¬
        takeExtension(template)
end tempFilePath
```

```js
// File name template -> temporary path
// (Random digit sequence inserted between template base and extension)
```

```js
// tempFilePath :: String -> IO FilePath
const tempFilePath = template =>
    ObjC.unwrap($.NSTemporaryDirectory()) +
    takeBaseName(template) + Math.random()
    .toString()
    .substring(3) + takeExtension(template);
```