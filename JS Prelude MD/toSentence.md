```javascript
// toSentence :: String -> String
const toSentence = s =>
    // Sentence case - initial char capitalized
    // and rest lowercase.
    Boolean(s.length) ? (
        s[0].toLocaleUpperCase() + s.slice(1)
        .toLocaleLowerCase()
    ) : s;
```