```javascript
// thenIO (>>) :: IO a -> IO b -> IO b
const thenIO = ma => 
    mb => mb;
```


```applescript
-- thenIO (>>) :: IO a -> IO b -> IO b
on thenIO(ma, mb)
    mb
end thenIO
```