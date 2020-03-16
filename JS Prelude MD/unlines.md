```js
// unlines :: [String] -> String
const unlines = xs =>
    // A single string formed by the intercalation
    // of a list of strings with the newline character.
    xs.join('\n');
```