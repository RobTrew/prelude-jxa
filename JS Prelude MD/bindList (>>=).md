```javascript
// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = xs =>
    // The bind operator for Arrays.
    mf => [...xs].flatMap(mf);
```