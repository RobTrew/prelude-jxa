```js
// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = (x, xs) =>
    concatMap((y, i) => y === x ? (
        [i]
    ) : [], xs);
```