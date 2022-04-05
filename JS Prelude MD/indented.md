```javascript
// indented :: String -> String -> String
const indented = strIndent =>
    s => lines(s).map(
        x => Boolean(x) ? (
            strIndent + x
        ) : x
    )
    .join("\n");
```