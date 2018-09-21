```js
// jsonLog :: a -> IO ()
const jsonLog = (...args) =>
    console.log(
        args
        .map(JSON.stringify)
        .join(' -> ')
    );
```