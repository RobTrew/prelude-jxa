```javascript
// showLog :: a -> IO ()
const showLog = (...args) =>
    console.log(
        args
        .map(JSON.stringify)
        .join(" -> ")
    );
```


```applescript
-- showLog :: a -> IO ()
on showLog(e)
    log show(e)
end showLog
```