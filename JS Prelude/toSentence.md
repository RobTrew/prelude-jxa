```js
// Sentence case - initial string capitalized and rest lowercase
```

```js
// toSentence :: String -> String
const toSentence = s =>
    (0 < s.length) ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;
```