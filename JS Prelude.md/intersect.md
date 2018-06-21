```js
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = (xs, ys) => 
  xs.filter(x => ys.indexOf(x) !== -1);
```