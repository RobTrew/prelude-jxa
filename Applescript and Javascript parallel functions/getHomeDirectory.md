```applescript
-- getHomeDirectory :: IO FilePathon getHomeDirectory()	current application's NSHomeDirectory() as stringend getHomeDirectory
```

```js
// getHomeDirectory :: IO FilePath
const getHomeDirectory = () =>
    ObjC.unwrap($.NSHomeDirectory());
```