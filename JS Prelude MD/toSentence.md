```javascript
// toSentence :: String -> String
const toSentence = s =>
    // Sentence case - first character
    // capitalized, and rest lowercase.
    0 < s.length
        ? s[0].toLocaleUpperCase() + s.slice(1)
        .toLocaleLowerCase()
        : s;
```