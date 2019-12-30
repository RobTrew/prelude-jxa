```js
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n =>
    xs => enumFromThenTo(0)(n)(
        xs.length - 1
    ).reduce(
        (a, i) => a.concat([xs.slice(i, (n + i))]),
        []
    );
```