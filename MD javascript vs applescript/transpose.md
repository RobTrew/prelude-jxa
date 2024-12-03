```javascript
// transpose :: [[a]] -> [[a]]
const transpose = rows =>
    // Maximal transpose – the longest row determines
    // the number of columns.
    // If any rows are shorter than those that follow,
    // their elements are skipped:
    // transpose [[10,11],[20],[],[30,31,32]]
    //     == [[10,20,30],[11,31],[32]]
    rows.reduce(
        (cols, row) => cols.map((col, i) => {
            const v = row[i];

            return undefined !== v
                ? col.concat(v)
                : col;
        }),
        Array.from({
            length: 0 < rows.length
                ? Math.max(...rows.map(x => x.length))
                : 0
        }, () => [])
    );
```


```applescript
-- transpose :: [[a]] -> [[a]]
on transpose(xxs)
    -- If some of the rows are shorter than the following rows, 
    -- their elements are skipped:
    -- transpose({{10,11},{20},{},{30,31,32}}) -> {{10, 20, 30}, {11, 31}, {32}}
    set intMax to |length|(maximumBy(comparing(my |length|), xxs))
    set gaps to replicate(intMax, {})
    script padded
        on |λ|(xs)
            set lng to |length|(xs)
            if lng < intMax then
                xs & items (lng + 1) thru -1 of gaps
            else
                xs
            end if
        end |λ|
    end script
    set rows to map(padded, xxs)
    
    script cols
        on |λ|(_, iCol)
            script cell
                on |λ|(row)
                    item iCol of row
                end |λ|
            end script
            concatMap(cell, rows)
        end |λ|
    end script
    map(cols, item 1 of rows)
end transpose
```