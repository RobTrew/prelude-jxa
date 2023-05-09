```javascript
// toTitle :: String -> String
const toTitle = s =>
    Boolean(s.length) ? (
        `${toUpper(s[0])}${toLower(s.slice(1))}`
    ) : "";
```