```javascript
// indented :: String -> String -> String
const indented = indent =>
    s => lines(s).map(
        x => Boolean(x) ? (
            indent + x
        ) : x
    )
    .join("\n");
```