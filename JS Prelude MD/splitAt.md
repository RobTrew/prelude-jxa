```js
// splitAt :: Int -> [a] -> ([a], [a])
const splitAt = (n, xs) => Tuple(xs.slice(0, n), xs.slice(n));
```