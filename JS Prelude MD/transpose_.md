```javascript
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input rows.
    // Simpler version of transpose.
    // The shortest row limits the number of
    // ouput columns.
    rows.reduce(
        (cols, row) => cols.map(
            (col, i) => [...col, row[i]]
        ),
        Array.from({
            length: 0 < rows.length
                ? Math.min(...rows.map(x => x.length))
                : 0
        }, () => [])
    );
```