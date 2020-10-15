```js
// string :: String -> Parser String
const string = s =>
    // A particular string.
    fmapP(cs => cs.join(''))(
        sequenceP([...s].map(char))
    );
```