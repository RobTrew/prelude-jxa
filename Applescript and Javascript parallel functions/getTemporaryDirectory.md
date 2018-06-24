```applescript
-- getTemporaryDirectory :: IO FilePath
on getTemporaryDirectory()
    current application's NSTemporaryDirectory() as string
end getTemporaryDirectory
```

```js
// getTemporaryDirectory :: IO FilePath
const getTemporaryDirectory = () =>
    ObjC.unwrap($.NSTemporaryDirectory());
```