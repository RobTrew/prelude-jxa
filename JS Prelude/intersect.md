```js
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = (xs, ys) => 
  xs.filter(x => -1 !== ys.indexOf(x));
```