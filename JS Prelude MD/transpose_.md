```javascript
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // Minimal transpose – the shortest row
    // limits the number of ouput columns.
    // transpose_([[10, 11], [30, 31, 32]])
    //     == [[10, 30], [11, 31]]
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