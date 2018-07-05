```js
// indented :: String -> String -> String
const indented = (strIndent, s) =>
    unlines(map(
        x => '' !== x ? strIndent + x : x,
        lines(s)
    ));
```