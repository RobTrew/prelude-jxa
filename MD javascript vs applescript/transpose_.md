```javascript
// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // Minimal transpose – the shortest row
    // limits the number of ouput columns.
    // transpose_([[10, 11], [30, 31, 32]])
    //     == [[10, 30], [11, 31]]
    rows.reduce(
        (cols, row) => cols.map(
            (col, i) => col.concat(row[i])
        ),
        Array.from({
            length: 0 < rows.length
                ? Math.min(...rows.map(x => x.length))
                : 0
        }, () => [])
    );
```


```applescript
-- Simplified version - assuming rows of unvarying length.
-- transpose_ :: [[a]] -> [[a]]on transpose_(rows)	script cols		on |λ|(_, iCol)			script cell				on |λ|(row)					item iCol of row				end |λ|			end script			concatMap(cell, rows)		end |λ|	end script	map(cols, item 1 of rows)end transpose_
```