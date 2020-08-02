```js
// indented :: String -> String -> String
const indented = strIndent =>
    s => s.split(/[\r\n]/).map(
        x => '' !== x ? strIndent + x : x
    ).join('\n');
```