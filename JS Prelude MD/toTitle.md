```javascript
// toTitle :: String -> String
const toTitle = s =>
    // NB this does not model any regional or cultural conventions.
    // It simply simply capitalizes the first character of each word.
    regexMatches(/(\w)(\w*)(\b[\W]*|$)/g)(s)
    .map(ms => ms[1].toUpperCase() + ms[2].toLowerCase() + ms[3])
    .join('');
```