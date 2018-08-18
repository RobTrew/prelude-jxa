```js
// findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
//-> {2, 5}
```

```js
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = (p, xs) =>
    concatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : [], xs);
```