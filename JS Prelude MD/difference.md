```js
// difference :: Eq a => [a] -> [a] -> [a]
const difference = (xs, ys) =>
    xs.filter(x => -1 === ys.indexOf(x));
```