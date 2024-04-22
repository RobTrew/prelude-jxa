```javascript
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = p =>
    xs => {
        const ys = [...xs];

        return ys.flatMap(
            (y, i) => p(y, i, ys)
                ? [i]
                : []
        );
    };
```