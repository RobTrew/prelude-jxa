```javascript
// words :: String -> [String]
const words = s =>
    // List of space-delimited sub-strings.
    // Leading and trailling space ignored.
    s.split(/\s+/u).filter(Boolean);
```