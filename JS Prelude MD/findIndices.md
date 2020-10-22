```javascript
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = p =>
    xs => (
        ys => ys.flatMap((y, i) => p(y, i, ys) ? (
            [i]
        ) : [])
    )([...xs]);
```