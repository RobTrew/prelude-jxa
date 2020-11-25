```javascript
// regexMatches :: Regex String -> String -> [[String]]
const regexMatches = rgx =>
    // All matches for the given regular expression
    // in the supplied string s.
    s => [...s.matchAll(new RegExp(rgx, 'g'))];
```