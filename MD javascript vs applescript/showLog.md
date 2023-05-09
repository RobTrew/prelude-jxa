```javascript
// showLog :: a -> IO ()
const showLog = (...args) =>
    // eslint-disable-next-line no-console
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