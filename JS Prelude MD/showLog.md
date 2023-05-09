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