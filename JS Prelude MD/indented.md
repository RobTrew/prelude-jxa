```javascript
// indented :: String -> String -> String
const indented = strIndent =>
    s => s.split(/[\r\n]/u)
    .map(
        x => "" !== x ? strIndent + x : x
    )
    .join("\n");
```