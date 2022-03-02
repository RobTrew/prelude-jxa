```javascript
// showMatrix :: (a -> String) -> [[a]] -> String
const showMatrix = fShow =>
    rows => 0 < rows.length ? (() => {
        const w = fShow(Math.max(...rows.flat())).length;

        return rows.map(
            cells => cells.map(
                x => fShow(x).padStart(w, " ")
            ).join(" ")
        ).join("\n");
    })() : "";
```