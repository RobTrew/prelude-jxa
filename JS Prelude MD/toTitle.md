```javascript
// toTitle :: String -> String
const toTitle = s =>
    0 < s.length
        ? `${toUpper(s[0])}${toLower(s.slice(1))}`
        : "";
```