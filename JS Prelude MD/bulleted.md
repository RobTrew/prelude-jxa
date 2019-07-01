```js
// bulleted :: String -> String -> String
const bulleted = (strIndent, s) =>
    s.split(/[\r\n]/).map(
        x => '' !== x ? strIndent + '- ' + x : x
    ).join('\n')
```