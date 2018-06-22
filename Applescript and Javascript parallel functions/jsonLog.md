```applescript
-- jsonLog :: a -> IO ()
on jsonLog(e)
	log showJSON(e)
end jsonLog
```

```js
// jsonLog :: a -> IO ()
const jsonLog = (...args) =>
    console.log(
        args
        .map(JSON.stringify)
        .join(' -> ')
    );
```