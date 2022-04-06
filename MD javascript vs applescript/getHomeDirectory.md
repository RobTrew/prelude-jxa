```applescript
-- getHomeDirectory :: IO FilePath
on getHomeDirectory()
    current application's NSHomeDirectory() as string
end getHomeDirectory
```


```javascript
// getHomeDirectory :: IO FilePath
const getHomeDirectory = () =>
    ObjC.unwrap($.NSHomeDirectory());
```