```javascript
// matrix Int -> Int -> (Int -> Int -> a) -> [[a]]
const matrix = nRows => nCols =>
    // A matrix of a given number of columns and rows,
    // in which each value is a given function of its
    // (zero-based) column and row indices.
    f => Array.from(
        {length: nRows}, (_, iRow) =>
            Array.from(
                {length: nCols},
                (__, iCol) => f(iRow)(iCol)
            )
    );
```