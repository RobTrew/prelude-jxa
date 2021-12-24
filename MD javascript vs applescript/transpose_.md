```applescript
-- Simplified version - assuming rows of unvarying length.
-- transpose_ :: [[a]] -> [[a]]on transpose_(rows)	script cols		on |λ|(_, iCol)			script cell				on |λ|(row)					item iCol of row				end |λ|			end script			concatMap(cell, rows)		end |λ|	end script	map(cols, item 1 of rows)end transpose_
```


```javascript
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input transposed
    // into new rows.
    // Simpler version of transpose, assuming input
    // rows of even length.
    0 < rows.length ? rows[0].map(
        (_, i) => rows.flatMap(
            v => v[i]
        )
    ) : [];
```