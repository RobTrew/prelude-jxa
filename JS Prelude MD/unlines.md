```js
// unlines :: [String] -> String
const unlines = xs =>
    // A linefeed-delimited string constructed
    // from the list of lines in xs.
    xs.join('\n');
```