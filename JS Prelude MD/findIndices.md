```js
// findIndices :: (a -> Bool) -> [a] -> [Int]
const findIndices = (p, xs) =>
    concatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : [], xs);
```