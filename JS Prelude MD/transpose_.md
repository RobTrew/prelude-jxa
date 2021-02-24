```javascript
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input transposed
    // into new rows.
    // Simpler version of transpose, assuming input
    // rows of even length.
    0 < rows.length ? rows[0].map(
        (x, i) => rows.flatMap(
            v => v[i]
        )
    ) : [];
```