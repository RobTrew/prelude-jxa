```js
// takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
const takeFromThenTo = (a, b, z, xs) =>
    map(i => xs[i], enumFromThenTo(a, b, z));
```