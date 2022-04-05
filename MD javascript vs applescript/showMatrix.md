```javascript
// showMatrix :: (a -> String) -> [[a]] -> String
const showMatrix = fShow =>
    rows => Boolean(rows.length) ? (() => {
        const w = fShow(Math.max(...rows.flat())).length;

        return rows.map(
            cells => cells.map(
                x => fShow(x).padStart(w, " ")
            ).join(" ")
        ).join("\n");
    })() : "";
```


```applescript
-- showMatrix :: [[Maybe a]] -> Stringon showMatrix(rows)    -- String representation of rows    -- as a matrix.        script showRow        on |λ|(a, row)            set {maxWidth, prevRows} to a            script showCell                on |λ|(acc, cell)                    set {w, xs} to acc                    if missing value is cell then                        {w, xs & ""}                    else                        set s to cell as string                        {max(w, length of s), xs & s}                    end if                end |λ|            end script                        set {rowMax, cells} to foldl(showCell, {0, {}}, row)            {max(maxWidth, rowMax), prevRows & {cells}}        end |λ|    end script        set {w, stringRows} to foldl(showRow, {0, {}}, rows)    script go        on |λ|(row)            unwords(map(justifyRight(w, space), row))        end |λ|    end script        unlines(map(go, stringRows))end showMatrix
```