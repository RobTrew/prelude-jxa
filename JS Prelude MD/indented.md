```javascript
// indented :: String -> String -> String
const indented = indent =>
    s => lines(s).map(
        x => 0 < x.length
            ? indent + x
            : x
    )
    .join("\n");
```