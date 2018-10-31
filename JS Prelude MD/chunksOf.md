```js
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = (n, xs) =>
    enumFromThenTo(0, n - 1, xs.length - 1)
    .reduce(
        (a, i) => a.concat([xs.slice(i, i + n)]),
        []
    );
```