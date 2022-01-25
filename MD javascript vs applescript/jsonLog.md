```applescript
-- jsonLog :: a -> IO ()
on jsonLog(e)
    log showJSON(e)
end jsonLog
```


```javascript
// jsonLog :: a -> IO ()
const jsonLog = (...args) =>
    // eslint-disable-next-line no-console
    console.log(
        args
        .map(JSON.stringify)
        .join(" -> ")
    );
```