```applescript
-- Simplified version - assuming rows of unvarying length.
```

```applescript
-- transpose_ :: [[a]] -> [[a]]
```

```js
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input transposed
    // into new rows.
    // Simpler version of transpose, assuming input 
    // rows of even length.
    0 < rows.length ? rows[0].map(
        (x, i) => concatMap(
            x => x[i],
            rows
        )
    ) : [];
```