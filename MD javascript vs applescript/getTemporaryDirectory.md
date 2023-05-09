```javascript
// getTemporaryDirectory :: IO FilePath
const getTemporaryDirectory = () =>
    ObjC.unwrap($.NSTemporaryDirectory());
```


```applescript
-- getTemporaryDirectory :: IO FilePath
on getTemporaryDirectory()
    current application's NSTemporaryDirectory() as string
end getTemporaryDirectory
```