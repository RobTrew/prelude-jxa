```javascript
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input transposed
    // into new rows.
    // Simpler version of transpose, assuming input
    // rows of even length.
    Boolean(rows.length) ? rows[0].map(
        (_, i) => rows.flatMap(
            v => v[i]
        )
    ) : [];
```