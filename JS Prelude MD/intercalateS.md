```javascript
// intercalateS :: String -> [String] -> String
const intercalateS = s =>
    // The concatenation of xs
    // interspersed with copies of s.
    xs => xs.join(s);
```