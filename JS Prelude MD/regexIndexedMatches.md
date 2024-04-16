```javascript
// regexIndexedMatches :: Regex -> String -> [(Int, String)]
const regexIndexedMatches = rgx =>
    // (Index, String) tuples for all matches of a
    // regular expression in a given string.
    s => Array.from(
        s.matchAll(rgx),
        m => [m.index, m[0]]
    );
```