```javascript
// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = xs =>
    mf => [...xs].flatMap(mf);
```