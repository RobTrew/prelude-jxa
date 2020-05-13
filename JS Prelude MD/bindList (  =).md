```js
// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = xs =>
    mf => list(xs).flatMap(mf);
```