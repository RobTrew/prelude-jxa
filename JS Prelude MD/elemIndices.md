```javascript
// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = x =>
    // The indices at which x occurs in xs.
    xs => [...xs].flatMap(
        (y, i) => y === x
            ? [i]
            : []
    );
```