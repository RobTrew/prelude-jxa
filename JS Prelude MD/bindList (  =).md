```js
// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = (xs, mf) => 
  [].concat.apply([], xs.map(mf));
```