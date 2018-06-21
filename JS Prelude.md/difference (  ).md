```js
// difference (\\) :: Eq a => [a] -> [a] -> [a]
const difference = (xs, ys) =>
    xs.filter(x => ys.indexOf(x) === -1);
```