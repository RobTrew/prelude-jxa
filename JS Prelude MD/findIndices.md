```js
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = p => xs =>
    xs.flatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : []);
```