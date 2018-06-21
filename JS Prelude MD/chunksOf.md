```js
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = (n, xs) =>
    xs.reduce((a, _, i, xs) =>
        i % n ? a : a.concat([xs.slice(i, i + n)]), []);
```