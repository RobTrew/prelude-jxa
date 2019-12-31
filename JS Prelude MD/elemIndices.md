```js
// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = x =>
    xs => xs.flatMap((y, i) => y === x ? (
        [i]
    ) : []);
```