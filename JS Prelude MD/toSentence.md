```javascript
// toSentence :: String -> String
const toSentence = s =>
    // Sentence case - initial char capitalized
    // and rest lowercase.
    (0 < s.length) ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;
```