```javascript
// transpose :: [[a]] -> [[a]]
const transpose = rows =>
    // If any rows are shorter than those that follow,
    // their elements are skipped:
    // > transpose [[10,11],[20],[],[30,31,32]]
    //             == [[10,20,30],[11,31],[32]]
    rows.reduce(
        (cols, row) => cols.map((col, i) => {
            const v = row[i];

            return undefined !== v
                ? [...col, v]
                : col;
        }),
        Array.from({
            length: 0 < rows.length
                ? Math.max(...rows.map(x => x.length))
                : 0
        }, () => [])
    );
```