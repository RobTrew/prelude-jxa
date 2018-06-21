```js
// Sentence case - initial string capitalized and rest lowercase
```

```js
// toSentence :: String -> String
const toSentence = s =>
    s.length > 0 ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;
```